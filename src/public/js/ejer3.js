//EJERCICIO3
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
  if(xhttp.readyState == 4 && xhttp.status == 200){
    jsonTotal = JSON.parse(this.responseText);
    document.getElementById("imagenMeow").setAttribute("src", jsonTotal.file);
  }
} 
xhttp.open("GET", "https://aws.random.cat/meow", true);
xhttp.send();