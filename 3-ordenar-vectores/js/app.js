const input1 = document.querySelector("#input-entrada1");
const input2 = document.querySelector("#input-entrada2");
const spForm1 = document.querySelector(".spForm1");
const spForm2 = document.querySelector(".spForm2");
const resultado = document.querySelector(".resultado");

const array1 = [];
const array2 = [];
let newArray1 = [];
let newArray2 = [];
let arrayUnida = [];

const form = document.querySelector("#form");

function handleInputs(inputElement, array, span) {
	const { value } = inputElement;
	const valueParsedo = parseInt(value);

	if (!value) {
		console.log("no entra");
		return array;
	}

	if (array.length >= 5) {
		alert("no puede ingresar mas numeros");
		limpiar(inputElement);
		return;
	}

	if (array.length === 0 || inputElement.value > array[array.length - 1]) {
		array.push(valueParsedo);
		limpiar(inputElement);
		span.innerText = `Vector : [ ${array.join(", ")} ]`;
	} else {
		alert(`Ingrese un numero mayor a ${array[array.length - 1]}`);
		limpiar(inputElement);
	}

	return array;
}

function limpiar(elemento) {
	elemento.value = "";
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	newArray1 = handleInputs(input1, array1, spForm1);
	newArray2 = handleInputs(input2, array2, spForm2);
	arrayUnida = [...newArray1, ...newArray2];
	arrayUnida.sort((a, b) => {
		return a - b;
	});
	resultado.innerText = `Vector ordenado : [ ${arrayUnida.join(", ")} ]`;
	console.log(arrayUnida);
});

const ass = [[,2,3],[1,2,3],2,3,]
console.table(ass)