function perimetroCuadrado(a) {
	return 4 * a;
}

function areaCuadrado(a) {
	return Math.pow(a, 2);
}

function calcularCuadrado(e) {
	e.preventDefault();
	const aCuadrado = parseInt(document.querySelector("#a-cuadrado").value);

	const perCuadrado = document.querySelector("#per-cuadrado");
	const areCuadrado = document.querySelector("#area-cuadrado");

	perCuadrado.value = perimetroCuadrado(aCuadrado);
	areCuadrado.value = areaCuadrado(aCuadrado);
}

export { calcularCuadrado };
