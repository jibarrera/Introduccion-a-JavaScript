//ubicar elemento dentro del DOM.
var verFecha = document.getElementById('verFecha');
var verHora = document.getElementById( 'verHora');



//generar función/es.
function mostrarFecha()
{		
	var fecha = new Date();
		console.log(fecha);
	var diaMes = fecha.getDate();
		console.log(diaMes);
	var mes = fecha.getMonth()+ 1;
		console.log(mes);
	var anio = fecha.getFullYear();
	console.log(anio);
	if (mes < 10) {
		mes = '0' + mes;
	}
	verFecha.innerText = diaMes + '/' +  mes + '/' +  anio;

}



function mostrarHora()
{
	var fecha = new Date();
	var horas = fecha.getHours();
	var minutos = fecha.getMinutes();
	if (minutos < 10) {
		minutos = '0'+minutos;
	}
	var segundos = fecha.getSeconds();
	if (segundos < 10) {
		segundos = '0'+segundos;
	}
	verHora.innerText = horas + ':' + minutos + ':' + segundos;
}





//Ejecutar.

mostrarFecha();
mostrarHora();

//Actualizar el llamado a mostrarHora.
setInterval(mostrarHora, 1000);
