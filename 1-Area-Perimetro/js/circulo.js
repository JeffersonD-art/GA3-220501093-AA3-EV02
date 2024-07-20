

function perimetroCirculo(a) {
    return 2 * Math.PI * a
}

function areaCirculo(a) {
    return Math.PI * Math.pow(a, 2)
}

function calcularCirculo(e) {
    e.preventDefault()
    const aCirculo = parseInt(document.querySelector('#a-circulo').value)

    const perCirculo = document.querySelector('#per-circulo')
    const areCirculo = document.querySelector('#area-circulo')


    perCirculo.value = perimetroCirculo(aCirculo)
    areCirculo.value = areaCirculo(aCirculo)

}

export { calcularCirculo }