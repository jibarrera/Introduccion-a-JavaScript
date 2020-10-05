//Ubicar elemento dentro del DOM.
	var caja = document.getElementById('caja');
	var grados = 0;

//Generar funcion.
function cambiarColor()
{	//La funcion Math.random me permite conseguir un numero aleatorio.
	var r = Math.random() * 255;
	var g =Math.random() * 255;
	var b = Math.random() * 255;
	grados += 5;
	caja.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
	caja.style.transform = 'rotate('+grados+'deg)'; 
}



//Invocar función.
cambiarColor();


//Actualizar funcion cada 500 Milisegundo:
setInterval(cambiarColor, 500);

//Con la función "SetInterval" se llama a una función para que se ejecute cada tanto tiempo.