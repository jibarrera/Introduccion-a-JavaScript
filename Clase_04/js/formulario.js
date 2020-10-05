//Ubicar elemento dentro del DOM.

var campoNombre = document.querySelector('input[name="nombre"]');
var errorNombre = document.querySelector('#errorNombre');


var campoEmail = document.querySelector('input[name="email"]');
var errorEmail = document.querySelector('#errorEmail');

var campoApellido = document.querySelector('input[name="apellido"]');
var errorApellido = document.querySelector('#errorApellido');







//Generar Funcion O funciones para validar.

function validar(){

	// vaciar campo de error
	errorNombre.innerHTML = '';
	errorEmail.innerHTML = '';
	errorApellido.innerHTML = '';


	//Chequear que haya algo en el Campo Nombre.
	if (campoNombre.value == '' | campoNombre.value== null) {

		errorNombre.innerHTML = '<img src="img/error2.png">Todos los campos son obligatorios';

		return false; //Esta funcion evita/impide que se envíe el formulario con o sin datos en los campos.


	}
	//Chequear que haya algo en el Campo Email
	if (campoEmail.value == '' | campoEmail.value == null) {


		errorEmail.innerHTML = '<img src="img/error2.png">Todos los campos son obligatorios';

		return false;	
	}

	//Chequear que haya algo en el Campo Email
	if (campoApellido.value == '' | campoApellido.value == null) {


		errorApellido.innerHTML = '<img src="img/error2.png">Todos los campos son obligatorios';

		return false;	
	}






		return true;




}





//Llamar a las funciones.