//EJERCICIO 5
//preguntarle a Milton como hacer para antes de seleccionar una nueva especie que elimine todos los li anteriores.
//me pasa que el tiempo de espera hace que me imprima las cosas mas de una ves
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
function viewPages(){
    if(this.readyState === 4 && this.status === 200){
        let jsonParse = JSON.parse(this.responseText);
        let specie = jsonParse.results[1].species; 
        for(var index = 1; index <= jsonParse.info.pages; index++) {
            const xhttpV = new XMLHttpRequest();
            xhttpV.onreadystatechange = readyStateSussefull;
            xhttpV.open("GET", 'https://rickandmortyapi.com/api/character?page='+index.toString()+"&species="+specie,true); 
            xhttpV.send();
        }  
    }
}  

function selection(){
    var type = document.getElementById("optionSpecie");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = viewPages; 
    xhttp.open("GET", "https://rickandmortyapi.com/api/character?species="+type.value, true);
    xhttp.send();  
} 