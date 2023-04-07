const select_vehiculo = document.querySelector("select#vehiculo")
const select_ubicacion = document.querySelector("select#ubicacion")
const inputDias = document.querySelector("input#dias")
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
    return (select_vehiculo.value !== "..." && select_ubicacion !== "..." && parseInt(inputDias.value) >= 1 && parseInt(inputDias.value) <= 60)
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

btnGuardar.addEventListener("click", ()=> {
    const historialAlquiler = {
       vehiculo: select_vehiculo[select_vehiculo.options.selectedIndex].textContent,
       ubicacion: select_ubicacion[select_ubicacion.options.selectedIndex].textContent,
       diasAlquiler: inputDias.value 
    }
    localStorage.setItem("historialAlquiler", JSON.stringify(historialAlquiler))
})