function btnCambioHoja(btn){ 
    if(btn.id == "btnAnt"){
        if(document.getElementById("selecPag").value > "1"){
            if(document.getElementById("selecPag").value == Math.trunc(jsonTotal.count/20 + (jsonTotal.count/20 % 1 > 0? 1:0))){ //Para acomodar el limit que se modifica en la ultima hoja
                document.getElementById("selecPag").value--;
                xhttpTotal.open("GET","https://pokeapi.co/api/v2/pokemon?offset=1080&limit=20",true);
                xhttpTotal.send();
            }else{
                document.getElementById("selecPag").value--;
                xhttpTotal.open("GET",jsonTotal.previous,true);
                xhttpTotal.send();	    
            }
        }
    }else{
        if(document.getElementById("selecPag").value < Math.round(jsonTotal.count/20)){
            document.getElementById("selecPag").value++;
            xhttpTotal.open("GET",jsonTotal.next,true);
            xhttpTotal.send();
        }
    }
}

function crearHojas(cantPoke){
    let sel = document.getElementById("selecPag");
    let cantHojas = Math.trunc(jsonTotal.count/20 + (jsonTotal.count/20 % 1 > 0? 1:0));
    if(!sel.value ==""){
        let hojaAct = sel.value;
    }
    sel.remove(sel.lastElementChild);
    for (var i = 0; i < cantHojas; i++) {
        let pag = document.createElement("option");
        pag.value = i + 1;
        pag.text = i + 1;
        sel.appendChild(pag);
    }
    if(typeof hojaAct !== "undefined"){
        sel.value = hojaAct;
    }
}

function selectCambioHoja(){
    let url;
    let pag = (document.getElementById("selecPag").value - 1) * 20;
    url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=" + pag; 
    xhttpTotal.open("GET",url,true);
    xhttpTotal.send();
}

function listaHandler(){
    if(xhttpTotal.readyState == 4 && xhttpTotal.status == 200){
        jsonTotal = JSON.parse(xhttpTotal.responseText);
        chequeoHojas();
        cargarPagina();
    }
}

function chequeoHojas(){
    let sel = document.getElementById("selecPag");
    if(sel.value == ""){
        crearHojas(jsonTotal.count);
    }
}

function cargarPagina(){
    document.getElementById("listaNumerada").innerHTML = "";
    let arrayPoke = jsonTotal.results;
    for (var i = 0; i < arrayPoke.length; i++) {
        let fila = document.createElement("li");
        fila.id = "itemLista";
        fila.onclick = mostrarPokemonReq;
        fila.title = arrayPoke[i].url;
        fila.innerHTML = arrayPoke[i].name.toUpperCase();
        document.getElementById("listaNumerada").appendChild(fila);
    }
}

function mostrarPokemonReq(){
    xhttpPoke.open("GET",this.title,true);
    xhttpPoke.send();
}

function descHandler(){
    if(xhttpDesc.readyState == 4 && xhttpDesc.status == 200){
        jsonDesc = JSON.parse(xhttpDesc.responseText);
        let desc = jsonDesc.flavor_text_entries.filter(d => d.language.name === "es");
        if(typeof desc !== "undefined"){
            document.getElementById("infoDesc").innerHTML = desc[0].flavor_text;         
        }
    }
}

// function descMov0Handler(){
//     if(xhttpDescMov0.readyState == 4 && xhttpDescMov0.status == 200){
//         jsonDescMov0 = JSON.parse(xhttpDescMov0.responseText);
//         let desc = jsonDescMov0.flavor_text_entries.filter(d => d.language.name === "es");
//         document.getElementsByClassName("tooltiptext")[0].innerHTML = 
//         desc[0].flavor_text;
//     }
// }

// function descMov1Handler(){
//     if(xhttpDescMov1.readyState == 4 && xhttpDescMov1.status == 200){
//         jsonDescMov1 = JSON.parse(xhttpDescMov1.responseText);
//         let desc = jsonDescMov1.flavor_text_entries.filter(d => d.language.name === "es");
//         document.getElementsByClassName("tooltiptext")[1].innerHTML = 
//         desc[0].flavor_text;
//     }
// }

// function descMov2Handler(){
//     if(xhttpDescMov2.readyState == 4 && xhttpDescMov2.status == 200){
//         jsonDescMov2 = JSON.parse(xhttpDescMov2.responseText);
//         let desc = jsonDescMov2.flavor_text_entries.filter(d => d.language.name === "es");
//         document.getElementsByClassName("tooltiptext")[2].innerHTML = 
//         desc[0].flavor_text;
//     }
// }

// function descMov3Handler(){
//     if(xhttpDescMov3.readyState == 4 && xhttpDescMov3.status == 200){
//         jsonDescMov3 = JSON.parse(xhttpDescMov3.responseText);
//         let desc = jsonDescMov3.flavor_text_entries.filter(d => d.language.name === "es");
//         document.getElementsByClassName("tooltiptext")[3].innerHTML = 
//         desc[0].flavor_text;
//     }
// }

function descMovHandler(id){
    if(xhttpDescMov.readyState == 4 && xhttpDescMov.status == 200){
        jsonDescMov = JSON.parse(xhttpDescMov.responseText);
        let desc = jsonDescMov.flavor_text_entries.filter(d => d.language.name === "es");
        document.getElementsByClassName("tooltiptext")[id].innerHTML = 
        desc[0].flavor_text;
    }
}

function cargarDescMovimientos(){
    // if(jsonPoke.moves[0] != null){
    //     xhttpDescMov0.open("GET",jsonPoke.moves[0].move.url,true);
    //     xhttpDescMov0.send();
    // }
    // if(jsonPoke.moves[1] != null){
    // xhttpDescMov1.open("GET",jsonPoke.moves[1].move.url,true);
    // xhttpDescMov1.send();
    // }
    // if(jsonPoke.moves[2] != null){
    //     xhttpDescMov2.open("GET",jsonPoke.moves[2].move.url,true);
    //     xhttpDescMov2.send();
    // }
    // if(jsonPoke.moves[3] != null){
    //     xhttpDescMov3.open("GET",jsonPoke.moves[3].move.url,true);
    //     xhttpDescMov3.send();     
    // }
    for (let index = 0; index < 4; index++) {
        if(jsonPoke.moves[index] != null){
            xhttpDescMov.onreadystatechange = descMovHandler(index);
            xhttpDescMov.open("GET",jsonPoke.moves[index].move.url,true);
            xhttpDescMov.send();
        }
    }
}

// esto seguro se puede optimizar mucho tambien
// recuerden que muchos if y muchas lineas parecidas son las alarmas de que es necesario (o estaria bueno) hacer un refactoring
function mostrarPokemonHandler(){ 
    if(xhttpPoke.readyState == 4 && xhttpPoke.status == 200){
        jsonPoke = JSON.parse(xhttpPoke.responseText);
        xhttpDesc.open("GET",jsonPoke.species.url,"true");
        xhttpDesc.send();
        document.getElementById("infoNombre").innerHTML = 
        "#" + jsonPoke.id + " - " + jsonPoke.species.name.toUpperCase(); 
        let tipo = "";
        for (let t = 0; t < jsonPoke.types.length; t++) {
                tipo += jsonPoke.types[t].type.name + " ";
                if(t + 1 < jsonPoke.types.length){
                    tipo += "/ "
                }
        }
        document.getElementById("infoTipo").innerHTML = tipo.toUpperCase();
        if(jsonPoke.sprites.other["official-artwork"].front_default != null){
            document.getElementById("artwork").src = 
            jsonPoke.sprites.other["official-artwork"].front_default;
        }else{document.getElementById("artwork").src = ""}
        if(jsonPoke.sprites.front_default != null){
            document.getElementsByClassName("sprite")[0].src = 
            jsonPoke.sprites.front_default;
        }else{document.getElementsByClassName("sprite")[0].src = ""}     
        if (jsonPoke.sprites.back_default != null) {
            document.getElementsByClassName("sprite")[1].src =
            jsonPoke.sprites.back_default;
        }else{document.getElementsByClassName("sprite")[1].src = ""}   
        for (let i = 0; i < 4; i++) {
            if (jsonPoke.moves[i] != null) {
                let tTip = document.createElement("span");
                tTip.className = "tooltiptext";
                document.getElementsByClassName("movimientos")[i].innerHTML=jsonPoke.moves[i].move.name; 
                document.getElementsByClassName("movimientos")[i].appendChild(tTip);  
            }else{document.getElementsByClassName("movimientos")[i].innerHTML="Sin Movimientos"};            
        }
        cargarDescMovimientos();
    }
}