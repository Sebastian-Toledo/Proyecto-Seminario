//EJERCICIO4 
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
        console.log(jsonParse); 
        for(var index = 1; index <= jsonParse.info.pages; index++) {
            const xhttpV = new XMLHttpRequest();
            xhttpV.onreadystatechange = readyStateSussefull;
            xhttpV.open("GET", 'https://rickandmortyapi.com/api/character?page='+index.toString(), true);
            xhttpV.send();
        }  
    }
}        
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = viewPages;
xhttp.open("GET", 'https://rickandmortyapi.com/api/character', true);
xhttp.send(); 