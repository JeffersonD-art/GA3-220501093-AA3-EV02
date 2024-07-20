
import { calcularCirculo } from './circulo.js'
import { calcularCuadrado } from './cuadrado.js'
import { calcularRectangulo } from './rectangulo.js'
import { calcularTriangulo } from './triangulo.js'

const formulario = document.querySelector('#formulario')
const selectFormas = document.querySelector("#formas-select");

document.querySelector('#vacio').hidden = false
function handleCambio() {

    const formas = ['vacio', 'triangulo', 'rectangulo', 'cuadrado', 'circulo'];

    formas.forEach(forma => {
        document.querySelector(`#${forma}`).hidden = (selectFormas.value !== forma);
    });
}

selectFormas.addEventListener('change', handleCambio);


formulario.addEventListener("submit", calcularCirculo)

formulario.addEventListener("submit", calcularRectangulo)

formulario.addEventListener("submit", calcularCuadrado)

formulario.addEventListener("submit", calcularTriangulo)
