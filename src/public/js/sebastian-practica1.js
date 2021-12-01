var a = Math.floor(Math.random()*3);
var b = Math.floor(Math.random()*3);
var c = Math.floor(Math.random()*3);

var day1 = +new Date();
var day2 = new Date(1575978300000);

function imprimirFecha(fecha){
    log(fecha.toLocateString());
    // milton dice 
    // le falta agregar a esto la hora y los segundos
}

function cambioDeFecha(fecha1,fecha2){
    fecha1.setMonth(fecha2.getMonth());
    fecha2.setFullYear(fecha1.getFullYear());
    imprimirFecha(fecha1);
    imprimirFecha(fecha2)
}

function restaFechas(fecha1,fecha2){
    return(fecha1-fecha2);
}


const ejercicio7 =() => {  
    log(Math.max(a,b,c));
    return Math.pow((a+b),c);
}

function log(message) {
    console.log(message);
}

var text = "Lorem ipsum dolor sit amet.";
function ejercicio6(variable){
    log(variable.length);
    log(text.indexOf(`ipsum`));   
    let texto = "marcos dejate de romper e.e";
    log(texto.slice(1,5)); 
}

imprimirFecha(restaFechas(dia1,dia2)); 
// milton dice
// a este punto falta convertir de segundos a dias