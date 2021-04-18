var primerNombre = 'Germán'
var segundoNombre = ''
var apellido = 'Schinca'
var edad = 37
var altura = 1.72
var esExtranjero = false
var esMayorDeEdad = edad > 17


var nombreCompleto = primerNombre + ' ' + segundoNombre + ' ' + apellido

var cantidadDeLetras = nombreCompleto.length
console.log (cantidadDeLetras)

if (esMayorDeEdad) {
    console.log('Puedes acceder al sitio')
} else {
    console.log('Te redigiremos a otro sitio')
}

if ( esExtranjero == true ) {
    console.log('Bienvenido a nuestro pais')
} else {
    console.log('Hola, compatriota')
}

var cartelCookie = document.querySelector('.cookie')
var aceptar = document.querySelector('.cookie a')
var mostrarMensaje = false

if (mostrarMensaje) {
    cartelCookie.style.display = 'none'
}

aceptar.addEventListener('click', function () {
    cartelCookie.style.display = 'none'
})

var botonDeEnviar = document.querySelector('#footer form button')

botonDeEnviar.addEventListener('click', function () {
    botonDeEnviar.parentElement.remove()
    
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Hemos recibido su suscripción'

    document.querySelector('#footer').appendChild(parrafo)
})