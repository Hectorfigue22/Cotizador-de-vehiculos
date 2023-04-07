class cotizador {
    constructor(dias, factor_vehiculo, factor_ubicacion) {
        this.dias = parseInt(dias)
        this.factorVehi = parseInt(factor_vehiculo)
        this.factorUbi = parseFloat(factor_ubicacion)
    }
    cotizar() {
        let resultado = (this.factor_vehiculo * this.factor_ubicacion * this.dias)
        return resultado
    }
}
