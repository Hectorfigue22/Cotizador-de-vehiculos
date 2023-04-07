class cotizador {
    constructor(dias, factor_vehiculo, factor_ubicacion) {
        this.dias = parseInt(dias)
        this.factorVehi = parseInt(factor_vehiculo)
        this.factorUbi = parseFloat(factor_ubicacion)
    }
    cotizar() {
        let resultado = (this.factorVehi * this.factorUbi * this.dias).toFixed(2)
        return resultado
    }
}
