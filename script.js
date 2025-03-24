function validarLargo() {
    let ingreso = document.getElementById('nombre').value;
    let mensaje = document.getElementById('mensaje-nombre');
    let inputNombre = document.getElementById('nombre');

    if (ingreso.length == 0) {
        inputNombre.style.borderColor = "";
        mensaje.innerHTML = ""; 
    } 
    else if (ingreso.length <= 3) {
        inputNombre.style.borderColor = "red";  
        mensaje.innerHTML = "Al menos 3 caracteres";
    } 
    else {
        inputNombre.style.borderColor = "green"; 
        mensaje.innerHTML = ""; 
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
    } 
    else if (ingreso.includes("@") && ingreso.endsWith(".com")) {   
        emailInput.style.borderColor = "green";
        mensaje.innerHTML = "";
    } 
    else {
        emailInput.style.borderColor = "red";
        mensaje.innerHTML = "Formato no válido (example@gmail.com)";
    }
}

function ValidarContraseña(){

}

function ValidarContraseña2(){
    
}