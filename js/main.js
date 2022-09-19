import { guardarConsulta, odtenerConsulta, nuevaConsulta } from './firebase.js'
let formu = document.getElementById('formulario')
let contenedor = document.getElementById('listaDudas')
let btnLimpiar = document.getElementById('btnLimpiar')
let alerta = document.getElementById('alert')
window.addEventListener("DOMContentLoaded", async () => {

	nuevaConsulta((querySnapshot) => {

		
		
		contenedor.innerHTML = "";
		querySnapshot.forEach((doc) => {
			const consultas = doc.data();
	
			contenedor.innerHTML += `
			<div id="IDdudas">
			 <h20>${consultas._fecha}</h20>
			<h10>${consultas._email}</h10>
			 <h3>${consultas._titulo}</h3>
			 <p>${consultas._descripcion}</p>
			 <h5><span class="badge bg-success">${consultas._genero}</span></h5>
		 </div>`;
		})
	})
});
btnLimpiar.addEventListener('click', LimpiarFormulario)
formu.addEventListener('submit', CrearConsulta)


function CrearConsulta(e) {
	//prevenir accion por defecto
	e.preventDefault()

	alerta.innerHTML += `<div class="alert alert-success" role="alert" id="alert">
	Consulta ingredasa
	</div>`;
	
	
	const _fecha = formu['fecha'] 
	const _email = formu['email']
	const _titulo = formu['titulo']
	const _descripcion = formu['descripcion']
	const _genero = formu['genero']
	_fecha.value=(new Date()).toLocaleDateString()
	console.log(_fecha)

	guardarConsulta(_fecha.value, _email.value, _titulo.value, _descripcion.value, _genero.value)

	setTimeout(function(){
		alerta.innerHTML = "";
	}, 1000);

	formu.reset()
}
	






function LimpiarFormulario() {
	formu.reset()
}