const calcIMC = (arr, limite) => {
	var seleccion = arr.filter(persona => 
		persona.weight / (Math.pow(persona.height / 100,2)) > limite);
	return seleccion;
}

function imcPromedio(arr){
	let arrIMC = [];
	for (var i = 0; i < arr.length; i++) {
		arrIMC[i] = arr[i].weight / (Math.pow(arr[i].height / 100,2));
	}
	var redux = (acum, suma) => acum + suma;
	return arrIMC.reduce(redux)/(arr.length - 1);
}

function printArray(arr){
	for (let i = 0; i <= arr.length - 1; i++) {
		console.log(arr[i].name);
	}	
}

function personaMasJoven(arr){
	arr.reduce(compJoven);
	return arr[0];
}

function arrNombreEdad(arr) {
	let newArr = [];
	let today = new Date();
	for (let i = 0; i <= arr.length - 1; i++) {
		let age = today.getFullYear() - arr[i].dob.getFullYear();
		newArr[arr[i].name] = age	
	}
	return newArr;
}

function showMessage(message){
	alert(message);
}

module.exports.calcIMC = calcIMC;