const btnAgregar = document.querySelector(".btn-agregar");
const btnForm = document.querySelector(".btnForm");
const contenido = document.querySelector(".contenido");
const npersonas = document.querySelector(".nPersonas");
const modal = document.querySelector("#dialogModal");
const indice = document.querySelector("#indice");
const form = document.querySelector("#form");

const array = [];

function obtenerData(e) {
	const formData = new FormData(e.target);
	const formObject = {};

	formData.forEach((value, key) => {
		formObject[key] = value;
	});

	agregarArray(formObject);
}

function agregarArray(objeto) {
	array.push(objeto);
	const { nombre, cedula } = array[0];
}

function mostrarContenido(array) {}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	obtenerData(e);
	form.reset();
	document.querySelector("#modalDialogo").close();
	npersonas.textContent = array.length;

	if (array) {
		indice.disabled = false;
	} else {
		indice.disabled = true;
	}
});

indice.addEventListener("change", () => {
	const {
		nombre,
		cedula,
		nacimiento,
		email,
		residencia,
		origen,
		artista1,
		artista2,
		artista3,
		cancion1,
		cancion2,
		cancion3,
	} = array[indice.value];
	contenido.innerHTML = `
<div class="identificacion">
                <p>Nombre: <span class="nombre">${nombre}</span></p>
                <p>Cedula: <span class="cedula">${cedula}</span></p>
                <p>Fecha: <span class="fecha">${nacimiento}</span></p>
                <p>Ciudad Origen: <span class="origen">${origen}</span></p>
            </div>
            <div class="contacto">
                <p>Email: <span class="email">${email}</span></p>
                <p>Residencia: <span class="residencia">${residencia}</span></p>
            </div>
            <p>Canciones</p>
            <div class="canciones">
                <div>
                    <p>Artista 1: <span class="artista1">${artista1}</span></p>
                    <p>Cancion 1: <span class="cancion1">${cancion1}</span></p>
                </div>
                <div>
                    <p>Artista 2: <span class="artista2">${artista2}</span></p>
                    <p>Cancion 2: <span class="cancion2">${cancion2}</span></p>
                </div>
                <div>
                    <p>Artista 3: <span class="artista3">${artista3}</span></p>
                    <p>Cancion 3: <span class="cancion3">${cancion3}</span></p>
                </div>
            </div>
`;
});

btnAgregar.addEventListener("click", () => {
	document.querySelector("#modalDialogo").showModal();
});
