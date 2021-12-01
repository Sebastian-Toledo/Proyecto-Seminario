/*<!DOCTYPE html>
<html>
<head>
	<title>Practica 2</title>
</head>
<body>
	<script type="text/javascript">
		//Ejercicio 1

		let a = 1;
		let b = true;
		let c = "Hola";
		let d = null;
		let e;
		let f = 2n ** 60n;
		let g = new Date();
		let h = [1,2,3,4];
		let i = 'Hola';
		let j = { x: 2.0, y: -3.6 };
		//Invalid regular expression: missing /
		//let k = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-
		//		9-]+)*$/;

		console.log("a " + typeof(a));
		console.log("b " + typeof(b));
		console.log("c " + typeof(c));
		console.log("d " + typeof(d));
		console.log("e " + typeof(e));
		console.log("f " + typeof(f));
		console.log("g " + typeof(g));
		console.log("h " + typeof(h));
		console.log("i " + typeof(i));
		console.log("j " + typeof(j));

		//Ejercicio 2

		let a2 = 25;

		console.log(++a2);
		console.log(a2++);

		console.log(a2 == '27');
		console.log(a2 === '27');

		//Ejercicio 3

		let arregloNum = [1,4,6,8,3,7,2];

		function max(values) {
			return Math.max(...values);
		}
		function min(values) {
			return Math.min(...values);
		}
		function avg(values) {
			let prom = sum(values);
			prom /= values.length;
			return prom
		}

		

		function sum(values) {
			let suma = 0;
			for (var i2 = values.length - 1; i2 >= 0; i2--) {
				suma += values[i2];
			}
			return suma;
		}

		

		console.log("Maximo: " + max(arregloNum));
		console.log("Minimo: " + min(arregloNum));
		console.log("Promedio: " + avg(arregloNum));
		console.log("Suma: " + sum(arregloNum));
		
		var prices = [1.2, 2, 22, -33, 12, 0.0, "13", Math.PI];
		var names = ["John", "Paul", "George", "Ringo"];
		
		console.log(max(prices));
		console.log(min(prices));
		console.log(avg(prices)); //NaN
		console.log(sum(prices));
		console.log(max(names)); //NaN
		console.log(min(names)); //NaN	
		console.log(avg(names)); //NaN
		console.log(sum(names)); //0RingoGeorgePaulJohn concatena los strings
		console.log(max([])); //-Infinity
		console.log(min([])); //Infinity
		console.log(avg([])); //NaN
		console.log(sum([])); //0

		//Ejercicio 4
		function concat(left, right) {
			return left.concat(right);
		}
		var names = ["John", "Paul", "George", "Ringo"];
		console.log(names.reduce(concat)); //JohnPaulGeorgeRingo

		var arrVac = [];
		//console.log(arrVac.reduce(concat)); Error por estar vacio el accumulator

		function avg2(values) {
			let res = values.reduce(concat);
			return res/values.length;
		}
		function sum2(values) {
			return values.reduce(concat);
		}

		//console.log("Promedio 2: " + avg2(arregloNum)); Uncaught TypeError: left.concat is not a function
		
		//console.log("Suma 2: " + sum2(arregloNum))

		//Ejercicio 5

		function arrayEquals(a, b) {
			if (a.length == b.length) {
				for (var i = 0; i >= a.length - 1; i++) {
					if (a[i] != b[i]){
						return false;
					}
				}
				return true;
			}else{
				return false;
			}
		}
		var aA = [1,2,3,4];
		var bA = [1,2,3,4];
		var cA = [1,2,3,4,5];
		var dA = "Hola";
		var eA = null;

		console.log("Arreglo aA y aA: " + arrayEquals(aA, aA));
		console.log("Arreglo aA y bA: " + arrayEquals(aA, bA));
		console.log("Arreglo bA y cA: " + arrayEquals(bA, cA));
		//console.log("Arreglo eA y cA: " + arrayEquals(eA, cA)); 
		//Cannot read property 'length' of null
		console.log("Arreglo cA y dA: " + arrayEquals(cA, dA));
		//console.log("Arreglo eA y eA: " + arrayEquals(eA, eA));
		//Cannot read property 'length' of null

		//Ejercicio 6

		function isInteger(num){
			let bool;
			if(typeof num === "number"){
				let resto = num - Math.floor(num);	
				bool = (resto == 0);
			}else{
				bool = false;
			}
			console.log(num + " es entero: " + bool); 
			
		}

		isInteger(2); // retorna true
		isInteger(2.0); // retorna true
		isInteger(2.1); // retorna false
		isInteger(-10); // retorna true
		isInteger([1]); // retorna false
		isInteger("2"); // retorna false
		isInteger(true); // retorna false
		isInteger(null); // retorna false
		var num;
		isInteger(num); // retorna false


		//Ejercicio 7
		
		function isNumeric(num){
			if (typeof num == "string") {
				return (!isNaN(Number(num)));
			}else{
				return false;
			}
		}

		console.log(isNumeric("2")); // retorna true
		console.log(isNumeric("2a")); // retorna false
		console.log(isNumeric(2)); // retorna false

		//Ejercicio 8

		var prices = {
			MILK: 48.90,
			BREAD: 90.50,
			BUTTER: 130.12
		};
		var amounts = {
			MILK: 1,
			BREAD: 0.5,
			BUTTER: 0.2
		}

		console.log(typeof prices);
		console.log(prices.BREAD);
		console.log(amounts["MILK"]);

		function total(val,cant){
			let total = 0; 
			if(!isNaN(cant["MILK"])){
				total += val.MILK * cant.MILK;
			}
			if(!isNaN(cant["BREAD"])){
				total += val.BREAD * cant.BREAD;
			} 
			if(!isNaN(cant["BUTTER"])){ 
				total += val.BUTTER * cant.BUTTER;
			}
			return total;
		}

		console.log(total(prices, amounts)); // imprime 120.174

		var amounts2 = {
			BREAD: 1.5
		};

		console.log(total(prices, amounts2));

		//Ejercicio 9

		var words = ['perro', 'gato', 'casa',
			'árbol', 'nube', 'día', 'noche',
			'zanahoria', 'babuino'];

		function printArregloOrdenado(arreglo){
			arreglo.sort((a,b) => a.localeCompare(b));
			for (let xxx = 0; xxx <=  arreglo.length - 1; xxx++) {
				console.log(arreglo[xxx]);
			}
			for (let zzz = arreglo.length - 1; zzz >= 0; zzz--) {
				console.log(arreglo[zzz]);
			}
		}

		printArregloOrdenado(words);

		//Ejercicio 10

		function printLongitud(arr){
			console.log("Imprimiendo en orden");
			arr.sort((a,b) => a.length - b.length);
			for (let i = 0; i <=  arr.length - 1; i++) {
				console.log(arr[i]);
			}
		}

		printLongitud(words);

		//Ejercicio 11

		function identity(x){
			return x;
		}
		var id = function(x){
			return x;
		}
		var iden = x => x;
		var identidad = identity;

		console.log(typeof identity);
		console.log(typeof id);
		console.log(typeof iden);
		console.log(typeof identidad); //Son todas funciones

		console.log(identity('Hola'));
		console.log(id('Hello'));
		console.log(iden('Buen día'));
		console.log(identidad('Buen día'));

		//Ejercicio 12

		function reduce(arr, sum, init){
			for (let i = 0; i <= arr.length - 1; i++) {
				init = sum(init, arr[i]);
			}
			return init;
		}

		var numbers = [ 1, 3, 4, 6, 23, 56, 56, 67, 3,
			567, 98, 45, 480, 324, 546, 56 ];
		var sum = (x, y) => x + y;
		console.log(numbers.reduce(sum, 0));
		console.log(reduce(numbers, sum, 0));

		//Ejercicio 13

		var alice = {
			name : "Alice",
			dob : new Date(2001, 3, 4),
			height : 165,
			weight : 68
		};
		var bob = {
			name : "Robert",
			dob : new Date(1997, 0, 31),
			height : 170,
			weight : 88
		};
		var charly = {
			name : "Charles",
			dob : new Date(1978, 9, 15),
			height : 188,
			weight : 102
		};
		var lucy = {
			name : "Lucía",
			dob : new Date(1955, 7, 7),
			height : 155,
			weight : 61
		};
		var peter = {
			name : "Peter",
			dob : new Date(1988, 2, 9),
			height : 165,
			weight : 99
		};
		var luke = {
			name : "Lucas",
			dob : new Date(1910, 11, 4),
			height : 172,
			weight : 75
		};
		var alice2 = {
			name : "Alicia2",
			dob : new Date(2005, 3, 4),
			height : 165,
			weight : 68
		}

		var arrPersonas = [alice, bob, charly, lucy, peter, luke, alice2];

		/* function calcIMCMayor25(arr){
			var seleccion = [];
			for (let i = 0; i <= arr.length - 1; i++) {
				let imc = arr[i].weight / (Math.pow(arr[i].height / 100,2));
				console.log(imc);
				if(imc > 25){
					seleccion.push(arr[i].name);
				}
			}
			return seleccion;
		} */

		const calcIMC = (arr,limite) => {
			var seleccion = arr.filter(persona => 
				persona.weight / (Math.pow(persona.height / 100,2)) > limite);
			return seleccion;
		}

		const imcPromedio = (arr) => {
			let arrIMC = [];
			for (var i = 0; i < arr.length; i++) {
				arrIMC[i] = arr[i].weight / (Math.pow(arr[i].height / 100,2));
			}
			var redux = (acum, suma) => acum + suma;
			return arrIMC.reduce(redux)/(arr.length - 1);
		}

		//console.log("IMC Promedio: " + imcPromedio(arrPersonas));

		const printArray = (arr) => {
			for (let i = 0; i <= arr.length - 1; i++) {
				console.log(arr[i].name);
			}
		}

		const personaMasJoven = (arr) => {
			arr.reduce(compJoven);
			return arr[0];
		}

		/*let imc25 = calcIMC(arrPersonas,25);
		console.log("IMC mayor a 25:");
		printArray(imc25);
		console.log("IMC mayor a 40:");		
		let imc40 = calcIMC(arrPersonas,40); //No tiene nadie
		printArray(imc40);

		let personaJoven = personaMasJoven(arrPersonas);

		*/
		const arrNombreEdad = (arr) => {
			let newArr = [];
			let today = new Date();
			for (let i = 0; i <= arr.length - 1; i++) {
				let age = today.getFullYear() - arr[i].dob.getFullYear();
				newArr[arr[i].name] = age	
			}
			return newArr;
		}

		module.exports = {
		  calcIMC: calcIMC,
		  imcPromedio: imcPromedio,
		  personaMasJoven: personaMasJoven,
		  arrNombreEdad: arrNombreEdad
		};

		//let nombEdad = arrNombreEdad(arrPersonas);

		//Ejercicio 14

		function showMessage(message){
			alert(message);
		}

/*	</script>

		<p onclick="showMessage('Hola')"> Por favor haga click aquí</p>
</body>
</html> */