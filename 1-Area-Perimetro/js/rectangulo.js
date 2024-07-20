
function perimetroRectangulo(a, b,) {
    return 2 * (a + b)
}

function areaRectangulo(a, b) {
    return a * b
}

function calcularRectangulo(e) {
    e.preventDefault()
    const aRectangulo = parseInt(document.querySelector('#a-rectangulo').value)
    const bRectangulo = parseInt(document.querySelector('#b-rectangulo').value)

    const perRectangulo = document.querySelector('#per-rectangulo')
    const areRectangulo = document.querySelector('#area-rectangulo')

    perRectangulo.value = perimetroRectangulo(aRectangulo, bRectangulo)
    areRectangulo.value = areaRectangulo(aRectangulo, bRectangulo)

}

export {calcularRectangulo}