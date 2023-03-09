
let mensaje_precio = ""
let continuar = true
const mensaje_inicial = "Ingrese el codigo de su producto \n" +
                        "A) Motos \n" +
                        "B) Autos \n" +
                        "C) Autos Electricos \n" +
                        "D) Caminetas \n" +
                        "E) Camiones \n"

function iniciar_consulta() {
    let seleccion = prompt(mensaje_inicial).toUpperCase().trim()
    
    if (seleccion !== "A" && seleccion !== "B" && seleccion !== "C" && seleccion !== "D" && seleccion !== "E" ){
        alert("Debes ingresar un código válido para tu producto")
    } else{
        switch(seleccion){
            case "A":
                mensaje_precio = "El precio de la moto es U$D 5000"
                break
            case "B":
                mensaje_precio = "El precio del auto es U$D 10000"
                break
            case "C":
                mensaje_precio = "El precio del auto electrico es U$D 15000"
                break
            case "D":
                mensaje_precio = "El precio de la camioneta es U$D 20000"
                break
            case "E":
                mensaje_precio = "El precio de la moto es U$D 25000"
                break
            default:
        }
        alert(mensaje_precio)
    }

}

function preguntar_precio() {

    while(continuar) {
        iniciar_consulta()
        continuar = confirm("¿Desea conocer el precio de otro vehículo?")
    }

}