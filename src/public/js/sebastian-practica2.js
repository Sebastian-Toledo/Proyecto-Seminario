//ejercicio 1
/*
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
let k = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//ejercicio 2
a = 25;

//ejercicio 3

function isItAnArrayOfNumbers(values){
    const equalsNumber = (element) => typeof element === 'number';
    return values.every(equalsNumber);
}
function max(values) {
    console.log(isItAnArrayOfNumbers(values))
    if(isItAnArrayOfNumbers(values)){
        return Math.max(...values);
    }
}
function min(values) {
    if(isItAnArrayOfNumbers(values)){
        return Math.min(...values);
    }
}
function avg(values) {
    return sum(values)/ values.length;
    
}
function sum(values) {
    if (isItAnArrayOfNumbers(values)) {
        return values.reduce(reducer = (accumulator, currentValue) => accumulator + currentValue);     
    }
}


//ejercicio 4
function concat(left, right) {
    return left.concat(right);
}

//ejercicio 5
function arrayEquals(a, b) {
    let equals = true;
    if((a!=null && b!=null)&&(a.length == b.length)){
        for (let i = 0; i < a.length; i++) {
            if (a[i]!=b[i]) {
                equals= false;
                break;
            }               
        }
    }else{
        equals= false;
    }
    if(a==null && b==null){
        equals = true;
    }
    return equals;
}

//ejercicio 6
function isInteger(num) {
    let x = false;
    if (Number.isInteger(num)) {
         x = true;
    }
    console.log(x);//para ver el resultado en consola
    return x;
}

//ejercicio 7
function isNumeric(string) {
 let x = false;
 if(!isNaN(string)&&(typeof string != "number")){
     x = true;
    }
 console.log(x);//para ver el resultado en consola
 return x;
}

//ejercicio 8
function total(prices, amounts) {
    let total;
    for (const item of prices) {
       if (prices[item] & amounts[item]) {
           total+=prices[item]*amounts[item];
       }       
    }
    return total;
}

//ejercicio 9

function ordenAlfabetico(array) {
    array.sort((a,b) => a.localeCompare(b)
    );
    return array;
}

function ordenIvertido(array) {
    array.sort((a,b) => b.localeCompare(a)
    );  
    return array;
}

//ejercicio 10

function ordenAlfabeticoPorLongitud(array) {
    array.sort((a,b) => a.length - b.length
    );
    return array;
}

function ordenIvertidoPorLongitud(array) {
    array.sort((a,b) => b.length - a.length
    );  
    return array;
}

//ejercicio 11

function identity(x){
    return x;
   }
   var id = function(x){
    return x;
   }

//ejercicio 12
function reduce(array, binaryOperation, initialValue){
    for (let index = 0; index < array.length; index++) {
         initialValue = binaryOperation(initialValue , array[index]);  
    }
    return initialValue;
   }

*/
//ejercicio 13

function imc({weight,height}) {
    let h = height /100;
    return (weight/(h*h));
}

function imcMayores(personas) {
    let array = [];
    for (let index = 0; index < personas.length; index++) {
        if (imc(personas[index])>25) {
            console.log('Persona con imc mayor a 25: ${personas.name}');
            array.push(personas[index].name);
        }
    }
    return array;
}


function calcularEdad({dob}) {
    let año = Date.now();
    let newAño = new Date(año - (dob.getTime()));
    return newAño.getFullYear() - 1970;
}


function age(people) {
    let array = [];
    for (let element of people) {
        let obj = {};
        obj[element.name] =  calcularEdad(element);
        array.push(obj);        
    }
    return array;
}

function imcMayoresDe(edad,people) {
    let a = [];
    for (let element of people) {
        if (edad<calcularEdad(element)) {
            a.push(imc(element));
        }
    }
    return a;
}

function imcPromedio(people) {
    let a = 0;
    for (let element of people) {
        a += imc(element);      
    }
    return a/ people.length;
}

function min(people) {
    let edadMinima = 200;
    let m = {};
    for (let element of people) {
        if (edadMinima>calcularEdad(element)) {
            edadMinima = calcularEdad(element);
            m = element;
        }
    }
    return m;
}

function menorAMayor(people) {
    return people.sort((a,b) => a.height - b.height); 
}

module.exports.imcMayores = imcMayores;
module.exports.age = age;
module.exports.imcMayoresDe = imcMayoresDe;
module.exports.imcPromedio = imcPromedio;
module.exports.min = min;
module.exports.menorAMayor= menorAMayor;
/*
//ejercicio 14
function showMessage(message){
    alert(message);
}

//ejercicio 15

function enviar(){
    document.getElementById('texto2').value = document.getElementById('texto').value;
}


//ejecicios 16
function sumar(){
    document.getElementById('Resultado').value = parseInt(document.getElementById('numero1').value) + parseInt(document.getElementById('numero2').value);
}
 
//ejecicios 17
function sumar(){
    const Resultado = document.getElementById('Resultado');
    const n1 = parseInt(document.getElementById('numero1').value);
    const n2 = parseInt(document.getElementById('numero2').value);
    
    Resultado.value = n1 + n2;
}
function dividir(){
    const Resultado = document.getElementById('Resultado');
    const n1 = parseInt(document.getElementById('numero1').value);
    const n2 = parseInt(document.getElementById('numero2').value);
    
    if (n2 != 0) {
        Resultado.value = n1 / n2;
    }else{
        Resultado.value = 'Error, no se puede dividir por 0';
    }
}
function multiplicar(){
    const Resultado = document.getElementById('Resultado');
    const n1 = parseInt(document.getElementById('numero1').value);
    const n2 = parseInt(document.getElementById('numero2').value);
    Resultado.value = n1 * n2;
}
function restar(){
    const Resultado = document.getElementById('Resultado');
    const n1 = parseInt(document.getElementById('numero1').value);
    const n2 = parseInt(document.getElementById('numero2').value);
    Resultado.value = n1 - n2;
}
  
//ejercicio 18
function color(){
   document.body.style.backgroundColor = document.getElementById('colorSeleccionado').value;
}

//ejercicio 19
function color(){
    document.body.style.backgroundColor = document.getElementById('colorSeleccionado').value;
 }
 */





