import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

function paginaPrincipal() {
    window.location.href = 'HTML/PagePrincipal.html'; 
}

var firebaseConfig = {
    apiKey: "AIzaSyCM5njh5Uw5Pco8N3hMp0H8gvlrdftfG3I",
    authDomain: "jagapp-eb736.firebaseapp.com",
    databaseURL: "https://jagapp-eb736-default-rtdb.firebaseio.com",
    projectId: "jagapp-eb736",
    storageBucket: "jagapp-eb736.appspot.com",
    messagingSenderId: "32181786835",
    appId: "1:32181786835:web:3cf2d2aa1dbf04f2a09c26",
    measurementId: "G-T1DP1BB01V"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); 
console.log("Se inició correctamente la base de datos.")

document.getElementById('productForm')?.addEventListener('submit', async function(event) {
    event.preventDefault();

    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
    const productCode = document.getElementById('productCode').value;
    const productCan = document.getElementById('cantidad').value;

    try {
        await addDoc(collection(db, 'products'), {
            name: productName,
            price: productPrice,
            code: productCode,
            quantity: productCan
        });
        console.log("Producto agregado correctamente.");
        mostrarProductos(); 
    } catch (e) {
        console.error("Error al agregar el producto: ", e);
    }
});

async function mostrarProductos() {
    const productList = document.getElementById('productList');
    productList.innerHTML = ''; 
    const querySnapshot = await getDocs(collection(db, 'products'));
    querySnapshot.forEach(doc => {
        const product = doc.data();
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>${product.name}</strong><br>
            Precio: $${product.price}<br>
            Código de Barras: ${product.code}<br>
            Cantidad de Productos: ${product.quantity}
        `;
        productList.appendChild(listItem);
    });
}

// Cargar productos al inicio
window.onload = function() {
    if (document.getElementById('productList')) {
        mostrarProductos();
    }
};
