class venta {
    constructor(carrito) {
        this.carrito = carrito
    }

    obtener_subtotal() {
        if (this.carrito.length > 0) {
            return this.carrito.reduce((acumulador, vehiculo)=> acumulador + acumulador + vehiculo.precio_vehiculo, 0)
        }else {
            return `Error: Por favor vuelva a intentarlo.`
        }
    }

    terminar_compra() {
        if (this.obtener_subtotal() !== `Error: Por favor vuelva a intentarlo.`) {
            return `Su pago fue confirmado con un importe de $ ${this.obtener_subtotal()}. \n Muchas gracias por confiar en nosotros.`
        }else {
            return `Ocurrio un problema, intentelo nuevamente en unos minutos.`
        } 
    }
}
