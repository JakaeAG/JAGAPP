    const validCodes = ["12345", "abcde", "67890"]; 
    function checkCode(event) {
        event.preventDefault(); 
        const inputCode = document.getElementById('code').value;
        if (validCodes.includes(inputCode)) {
            window.location.href = "HTML/PagePrincipal.html"; 
        } else {
            Swal.fire({
                title: 'ERROR!',
                text: 'Codigo Incorrecto.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
              });
        }
    }
 
