function mostrarAñadirProd() {
    window.location.href = '../HTML/añadirprod.html'; 
}
function mostrarVerProd() {
    window.location.href = '../HTML/ver_Productos.html'; 
}

let divContent = document.querySelector('col-sm-6 col-xs-6 centrado').innerHTML;
console.log(divContent);


document.addEventListener('DOMContentLoaded', function() {
    const boton = document.querySelector('.button'); 

    boton.addEventListener('click', function() {
        alert(divContent)
        
    });
});