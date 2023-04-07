class cotizador {
    constructor(dias, factor_vehiculo, factor_ubicacion) {
        this.dias = parseInt(dias)
        this.factorVehi = parseInt(factor_vehiculo)
        this.factorUbi = parseFloat(factor_ubicacion)
    }
    cotizar() {
        let resultado = (this.dias * this.factor_vehiculo * factor_ubicacion).toFixed(2)
        return resultado
    }
}
