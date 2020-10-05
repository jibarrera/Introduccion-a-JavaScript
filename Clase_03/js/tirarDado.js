


//-------------------------Ubicar elemento dentro del DOM ---------------------------------

var verDado = document.getElementById('verDado');




// ------------------------Generar función-------------------------------------------------

function tirarDado()
{  


	//Funcion que me permite obtener numeros decimales aleatorios al azar. 
	var numeroAleatorio = Math.random();
		//console.log (numeroAleatorio);


	// Este calculo me permite obtener y calcular los numeros totales que contienen los dados. O sea entre el 1 y el 6.
	// En este caso, me genera un numero entre el 1 y el 6. Que son los que me sirven para lanzar el dado.
	 var numeroMultiplicado = (numeroAleatorio * 5) + 1;
		//console.log(numeroMultiplicado);



	 // La funcion Math.round  me permite transformar el numero multiplicado/aleatorio a numero entero.	

	var numeroRedondeado = Math.round (numeroMultiplicado);
		console.log(numeroRedondeado);
	

	verDado.src = 'img/dado'+numeroRedondeado+'.png';



}
//------------------------Llamar a función -------------------------------------------------
 tirarDado();