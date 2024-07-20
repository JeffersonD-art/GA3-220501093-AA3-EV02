const btn = document.querySelector("#btn")
const entrada = document.querySelector('#input-entrada')
document.querySelector('.entradas span').textContent = 1

let menor = 0
let mayor = 0
let minimo = 0
let maximo = 0
let adultoMayor = 0
let suma = 0
let promedio = 0


let iterador = 1
const edades = []
entrada.focus()

function handleAdd() {
    console.log(entrada.value)
    if (entrada.value < 1 || entrada.value >= 120) {
        alert("debe ingresar un numero entre 1 y 120")
        entrada.value = ''
        entrada.focus()
        return

    }
    if (iterador <= 10) {



        iterador++
        edades.push(parseInt(entrada.value))
        entrada.value = ''
        entrada.focus()
        console.log(edades)

        if (iterador <= 10) {
            document.querySelector('.entradas span').textContent = iterador
        } else {
            document.querySelector('.entradas span').textContent = 'no puede ingresar mas edades'
            calculos()
        }

        return
    }

}

btn.addEventListener('click', handleAdd)


function calculos() {
    minimo = Math.min(...edades)
    maximo = Math.min(...edades)

    edades.forEach(edad => {
        edad < 18 ? ++menor : ++mayor
        edad >= 60 ? ++adultoMayor : undefined
    })

    for (let i = 0; i < edades.length; i++) {
        suma += edades[i];
    }

    promedio = suma / edades.length


    console.log(menor, mayor, adultoMayor, minimo, maximo, promedio)
    document.querySelector('.menor span').textContent = menor
    document.querySelector('.mayor span').textContent = mayor
    document.querySelector('.adultoMayor span').textContent = adultoMayor
    document.querySelector('.minima span').textContent = minimo
    document.querySelector('.maxima span').textContent = maximo
    document.querySelector('.promedio span').textContent = promedio
}



