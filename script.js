document.getElementById("formulario").addEventListener('submit',function(event){

    if (validarLargo() && validarEmail()) {
 
    } 
    else{   
        event.preventDefault();
        let mensaje = document.getElementById('mensaje-envio');
        mensaje.innerHTML = "Campos incompletos o invalidos"
    }

})


function validarLargo() {
    let ingreso = document.getElementById('nombre').value;
    let mensaje = document.getElementById('mensaje-nombre');
    let inputNombre = document.getElementById('nombre');


    if (ingreso.length == 0) {
        inputNombre.style.borderColor = "";
        mensaje.innerHTML = ""; 
        return false
    } 
    else if (ingreso.length <= 3) {
        inputNombre.style.borderColor = "red";  
        mensaje.innerHTML = "Al menos 3 caracteres";
        return false
    } 
    else {
        inputNombre.style.borderColor = "green"; 
        mensaje.innerHTML = ""; 
        return true
    }
}

function validarEmail() {
    let emailInput = document.getElementById('email');
    let mensaje = document.getElementById('mensaje-email');
    let ingreso = emailInput.value;

    if (ingreso == "") 
    {
        mensaje.innerHTML = "";
        emailInput.style.borderColor = "";
        return false
    } 
    else if (ingreso.includes("@") && ingreso.endsWith(".com")) {   
        emailInput.style.borderColor = "green";
        mensaje.innerHTML = "";
        return true;
    } 
    else {
        emailInput.style.borderColor = "red";
        mensaje.innerHTML = "Formato no válido (example@gmail.com)";
        return false
    }
}

function ValidarContraseña(){

}

function ValidarContraseña2(){
    
}