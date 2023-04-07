const select_vehiculo = document.querySelector("select#vehiculo")
const select_ubicacion = document.querySelector("select#ubicacion")
const inputDias = document.querySelector("input")
const btnCotizador = document.querySelector("button.button.button")
const valor_alquiler = document.querySelector("span#valor_alquiler")
const btnGuardar = document.querySelector("span.guardar")

function cargar_combo(select, array) {
    if (array.length > 0) {
        array.forEach(element => {
            select.innerHTML += `<option value="${element.factor}">${element.tipo}</option>`
        });
    }
}
cargar_combo(select_vehiculo, datos_vehiculo)
cargar_combo(select_ubicacion, datos_ubicacion)

function validar_datos_completos() {
    let validador = (select_vehiculo.value !== "..." && select_ubicacion.value !== "..." && inputDias.value >= '1' && inputDias.value <= '60')
}

function realizar_cotizacion() {
    if (validar_datos_completos()) {
        const cotizo = new cotizador(inputDias.value, select_vehiculo.value, select_ubicacion.value)
        valor_alquiler.textContent = cotizo.cotizar()
    } else {
        alert("Complete todos los datos salicitados")
    }
}

btnCotizador.addEventListener("click", realizar_cotizacion)