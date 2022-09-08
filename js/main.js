let formu = document.getElementById('formulario')
let contenedor = document.getElementById('listaDudas')
let btnLimpiar = document.getElementById('btnLimpiar')

formu.addEventListener('submit', CrearPelicula)
btnLimpiar.addEventListener('click', LimpiarFormulario)
function CrearPelicula(e) {
	//prevenir accion por defecto
	e.preventDefault()

	let infoDudas = new FormData(formu)
	console.log(infoDudas)
	let _fecha = infoDudas.get('fecha')
	let _email = infoDudas.get('email')
	let _titulo = infoDudas.get('titulo')
	let _descripcion = infoDudas.get('descripcion')
	let _genero = infoDudas.get('genero')

	contenedor.innerHTML += `
	 <div id="IDdudas">
	 	<h20>${ _fecha }</h20>
		<h10>${ _email }</h10>
	 	<h3>${ _titulo }</h3>
	 	<p>${ _descripcion }</p>
	 	<h5><span class="badge bg-success">${ _genero }</span></h5>
	 </div>`

	formu.reset()
}

function LimpiarFormulario() {
		formu.reset()
}