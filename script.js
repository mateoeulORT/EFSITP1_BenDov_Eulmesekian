function validarLargo() {
    let ingreso = document.getElementById('nombre').value

    if (ingreso.length <= 3) {
        document.getElementById('nombre').style.color = "red"
    } else {
        document.getElementById('nombre').style.color = "black"
    }
}

function validarEmail() {
    let ingreso = document.getElementById('email').value

    if (ingreso) {
        document.getElementById('nombre').style.color = "red"
    } else {
        document.getElementById('nombre').style.color = "black"
    }
}