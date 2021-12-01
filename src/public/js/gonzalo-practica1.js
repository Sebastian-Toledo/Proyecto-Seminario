function log(message) {
    console.log(message);
}

/* ejercicio6: trabajando con strings */ 
function ejercicio6(text){
  log(text.length); /* cantidad de caracteres */

  var posicion = text.indexOf("ipsum");
  log(posicion);    /* posicion donde arranca dicha palabra, si es que existe */

  var subString = text.substring(1,4);
  log(subString.toUpperCase());    /* cadena en mayuscula de un sub string acotado */
}


/* ejercicio7: trabajando con numeros */ 
const a = Math.floor(Math.random()*15);
const b = Math.floor(Math.random()*15);
const c = Math.floor(Math.random()*15);

function ejercicio7(){
    /* eleva la suma de a+b ^ c */
    let resultado = (a + b);
    log(Math.pow(resultado , c));  

    /* de las tres constantes devuelve la mas grande */ 
    if(a > b){
        var mayor = a;
    } else {
        mayor = b;
    }
    if(mayor > c){
        mayor = mayor;
    } else {
        mayor = c;
    }
    log("la constante mas grande es "+ mayor)

    // milton dice 
    // el maximo tambien lo podrias hacer con Math.max
}

// ejercicio 8: trabajando con fechas

function imprimirFecha(dia2){
    console.log(dia2);
    // milton dice 
    // falta formatear la fecha como se indica en el ejercio (dd/mm/aaaa hh:ss)
}

function cambioDeFecha(dia1, dia2){
    dia2.setFullYear(dia1.getFullYear());
    dia1.setMonth(dia2.getMonth());
    imprimirFecha(dia1);
    imprimirFecha(dia2);
}

function restaDeFechas(dia1, dia2){
    var difAnio = dia1.getFullYear()-dia2.getFullYear();
    var difMes = dia2.getMonth()-dia1.getMonth();
    var difDia = dia2.getDay()-dia1.getDay();
    log("anio "+difAnio);
    log("mes "+difMes);
    log("dia "+difDia);
    // Milton dice
    // este punto tampoco cumple lo que se pide, la resta es de las dos fechas completas, y al resultado en milisegundo hay que convertirlo a dias
    // para informar este dato que era el que se pide
    
}