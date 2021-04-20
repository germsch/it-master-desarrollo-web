var calculadora = {
    resultado : 0,

    sumar(a = 0, b = 0) {
        this.resultado += a + b
    },

    restar(a = 0, b = 0) {
        this.resultado -= a - b
    },

    obtenerResultado() {
        return this.resultado
    }

    // resetear() {
    //     this.resultado -= this.sumar() + this.restar()
    // }
    // resetear() {
    //    this.resultado = 0
    // }
}

calculadora.restar(1)
calculadora.sumar(5)
calculadora.sumar(6)
// calculadora.resetear()

console.log( calculadora.obtenerResultado() )









function nombreCompleto(primerNombre, segundoNombre, apellido) {
    
    var resultado = primerNombre

    if (segundoNombre != '') {
        resultado += ' ' + segundoNombre 
    }

    return resultado += ' ' + apellido
}

var usuario = nombreCompleto('Germán', '', 'Schinca')

console.log(usuario)

