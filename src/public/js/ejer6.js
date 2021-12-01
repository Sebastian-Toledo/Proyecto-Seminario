//Ejercicio 6
// en este caso tengo que hacer que se ejecuten dos funciones a la misma ves, como se hace eso? ya lo hice, pero es la mejpr opcion
//como almaceno el numero de pagina y que se pueda ir cambiando dinamicamente sin tener que refrescar la pagina
// como limpio todos los divs que puse. para cuando haga otra busqueda no me los agregue a continuacion de los anteriores sino que en una pagina limpita
function readyStateSussefull(){
    if(this.readyState === 4 && this.status === 200){
        jsonTotal = JSON.parse(this.responseText);
        //console.log(jsonTotal);
        var elementUl = document.getElementById("listaNombres");
        var elementLi;
        var ind = 0;
        
        while(ind < jsonTotal.results.length) {
            elementLi = document.createElement("li");// creo un li
            elementLi.textContent = jsonTotal.results[ind].name;//le escribo un texto(el nombre de los personajes)  
            elementUl.appendChild(elementLi); //appendeo el li en el ul(elementUl)
            ind++; 
        } 
    }
}
var specie;
var page;
function selectSpecie(){
    specie = document.getElementById("optionSpecie"); 
}

function selectPage(){
    page = document.getElementById("NumberPage");
    return page.value; 
}

function ejecute(){   
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = readyStateSussefull; 
    xhttp.open('GET', 'https://rickandmortyapi.com/api/character?page='+page.value+"&species="+specie.value, true);
    xhttp.send();  
} 