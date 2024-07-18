
const btnTriangulo = document.querySelector('#calcular-triangulo')
btnTriangulo.addEventListener("click", calcularTriangulo)


function perimetroTriangulo(a, b, c) {
    return a + b + c
}

function areaTriangulo(b, h) {
    return (b*h) / 2
}

function calcularTriangulo(e) {
    e.preventDefault()
    const aTriangulo = parseInt(document.querySelector('#a-triangulo').value)
    const bTriangulo = parseInt(document.querySelector('#b-triangulo').value)
    const cTriangulo = parseInt(document.querySelector('#c-triangulo').value)
    const hTriangulo = parseInt(document.querySelector('#h-triangulo').value)
    const perTriangulo = document.querySelector('#per-triangulo')
    const areTriangulo = document.querySelector('#area-triangulo')

    perTriangulo.value = perimetroTriangulo(aTriangulo, bTriangulo, cTriangulo)
    areTriangulo.value = areaTriangulo(bTriangulo, hTriangulo)

}
