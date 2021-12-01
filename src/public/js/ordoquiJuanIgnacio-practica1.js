function log(message) {
	console.log(message);
}

function ejercicio6(text){
	log("Cantidad de caracteres: " + text.length);
	log("Posicion donde comienza la palabra 'ipsum': " + text.indexOf("ipsum"));
	const subStr = text.substr(1, 4);
	log("Substring posicion 1-4: " + subStr);
}

let a = Math.floor(Math.random() * 5);
let b = Math.floor(Math.random() * 5);;
let c = Math.floor(Math.random() * 5);;

function ejercicio7(){
	console.log("(" + a + " + " + b + ")^" + c + " = " + Math.pow(a+b,c));
	console.log("El numero mas grande es: " + Math.max(a, b, c));
}

function imprimirFecha(fecha) {
	console.log(fecha.getDate() + "/" 
		+ (fecha.getMonth() + 1) + "/" 
		+ fecha.getFullYear() + " "
		+ fecha.getHours() + ":" 
		+ fecha.getMinutes() + ":"
		+ fecha.getSeconds())
}

function cambiarFechas(fecha1, fecha2){
	year = fecha1.getFullYear();
	month = fecha2.getMonth();
	fecha2.setFullYear(year);
	fecha1.setMonth(month);
}

function restaFechas(fecha1,fecha2){
	const date1 = Date.parse(fecha1);
	const date2 = Date.parse(fecha2);
	const resultado = new Date(date1 - date2);
	return resultado; 
	// milton dice 
	// a este resultado falta convertir de milisegundos a dias, no es necesario crear una nueva fecha con la resta
}