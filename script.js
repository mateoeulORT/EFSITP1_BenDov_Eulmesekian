document.getElementById("formulario").addEventListener('submit',function (event){

    let contraseña = validarContraseña()

    if (validarLargo() && validarEmail() && contraseña != "" && validarContraseña2(contraseña)) {
        
        alert("Registro completado exitosamente")
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

function validarContraseña(){
    
    let ingreso = document.getElementById('contraseña').value;
    let mensaje = document.getElementById('mensaje-contraseña');
    let inputContraseña = document.getElementById('contraseña');

    validarContraseña2(ingreso)

    if (ingreso.length == 0) {
        inputContraseña.style.borderColor = "";
        mensaje.innerHTML = ""; 
        return false
        
    } 
    else if (ingreso.length >= 8 && /[0-9]/.test(ingreso) && /[a-zA-Z]/.test(ingreso)) {
        inputContraseña.style.borderColor = "green"; 
        mensaje.innerHTML = ""; 
        return ingreso     
    } 
    else {
        inputContraseña.style.borderColor = "red";  
        mensaje.innerHTML = "Debe contener almenos una letra y un numero (minimo 8 caracteres)"; 
        return false 
    }
    
}

function validarContraseña2(contraseña){
    let ingreso = document.getElementById('contraseña2').value;
    let mensaje = document.getElementById('mensaje-contraseña2');
    let inputContraseña = document.getElementById('contraseña2');


    if (ingreso.length == 0) {
        inputContraseña.style.borderColor = "";
        mensaje.innerHTML = ""; 
        return false
    } 
    else if (ingreso === contraseña) {
        inputContraseña.style.borderColor = "green"; 
        mensaje.innerHTML = ""; 
        return true
    } 
    else {
        inputContraseña.style.borderColor = "red";  
        mensaje.innerHTML = "Las contraseñas no coinciden"; 
        return false  
    }

}