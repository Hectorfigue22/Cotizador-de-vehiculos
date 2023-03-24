const carrito = []

let vehiculo = [{codigo: 1, tipo: "Moto chica", precio_vehiculo: 5000},
                {codigo: 2, tipo: "Moto grande", precio_vehiculo: 7000},
                {codigo: 3, tipo: "Auto chico", precio_vehiculo: 9000},
                {codigo: 6, tipo: "Auto Electrico chico", precio_vehiculo: 11000},
                {codigo: 4, tipo: "Auto mediano", precio_vehiculo: 13000},
                {codigo: 7, tipo: "Auto Electrico mediano", precio_vehiculo: 15000},
                {codigo: 5, tipo: "Auto grande", precio_vehiculo: 17000},
                {codigo: 8, tipo: "Auto Electrico grande", precio_vehiculo: 19000},
                {codigo: 9, tipo: "Camioneta cerrada", precio_vehiculo: 21000},
                {codigo: 10, tipo: "Camioneta con caja", precio_vehiculo: 23000},
                {codigo: 11, tipo: "Camion chico", precio_vehiculo: 25000},
                {codigo: 12, tipo: "Camion grande", precio_vehiculo: 27000}]


const mensaje_inicial = "Seleccione un código numérico correspondiente a su vehículo: "

function buscarVehiculo(codigo) {
    let resultado = vehiculo.find((vehiculo)=> vehiculo.codigo === parseInt(codigo))
    return resultado
}

function mirarCarrito() {
    console.table(carrito)
}

function finCompra() {
    if (carrito.length > 0) {
        const buy = new venta(carrito)
        alert(`El costo de la compra es de $ ${buy.obtener_subtotal()}`)
        let respuesta = confirm("¿Desea confirmar la compra?")
            if(respuesta) {
                alert(buy.terminar_compra())
                carrito.length = 0
            }
    }else {
        console.warn("No hay vehiculos en el carrito.")
    }
}

function vender(){
    let codigo = prompt(mensaje_inicial)
        if (!parseInt(codigo)) {
            alert("Error en el codigo ingresado")
            let respuesta = confirm("¿Desea intentarlo nuevamente?")
            if(respuesta){
                vender()
            }
            return  
        }
        
        let vehiculo_elegido = buscarVehiculo(codigo)
        if (vehiculo_elegido !== undefined) {
            alert(`${vehiculo_elegido.tipo} El vehiculo ${vehiculo_elegido.precio_vehiculo} a sido agegado a su carrito`)
            carrito.push(vehiculo_elegido)
            let respuesta = confirm("¿Desea comprar otro vehiculo?")
            if (respuesta){
                vender()
            }else
                finCompra()
        }else {
            alert("Error en el codigo ingresado")
            let respuesta = confirm("¿Desea intentarlo nuevamente?")
            if (respuesta) {
                vender() 
            }
            return   
        }         
}

// TENDRIA QUE TERMINAR SIENDO UNA PAGINA DE ALQUILER DE VEHICULOS POR AHORA VENTA DE VEHICULOS