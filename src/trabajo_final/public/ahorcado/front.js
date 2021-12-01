const prefix = "/ahorcado";

var vidas;
var letrasUsadas;
var palabraDescubierta;
var gameOver;

const letra = () => {
    var char = document.getElementById("letBox").value;
    if(chequearLetra(char)){
        console.log("La letra ya fue enviada previamente")
    }else{
        ahorcado("POST", "/letra", {letraEnviada: char})
        .then((response) => {
            rtaJson = JSON.parse(response);
            if(rtaJson.gameOver == true){ //Victoria o derrota
                actualizarVida(rtaJson.vidas);
                actualizarLetrasUsadas(rtaJson.letrasUsadas);
                document.getElementById("letraElegidaBox").innerHTML = rtaJson.palabraElegida.toUpperCase();
                finDeJuego(rtaJson.vidas > 0);
            }else{
                if(rtaJson.existe == true){  //La letra está en la palabra
                        palabraDescubierta = rtaJson.palabraDescubierta;
                        actualizarLetrasUsadas(rtaJson.letrasUsadas);
                        document.getElementById("letraElegidaBox").innerHTML = imprimirPalabra();
                }else{
                    actualizarVida(rtaJson.vidas);
                    actualizarLetrasUsadas(rtaJson.letrasUsadas);
                }
            }
        })
    }
}

const chequearLetra = (letra) => {
    return (letrasUsadas.includes(letra) || palabraDescubierta.includes(letra))
}

const finDeJuego = (resultado) => {
    document.getElementById("enviarLetraButton").disabled = true
    if(resultado){
        document.getElementById("vidas").innerHTML = "Ganaste!";
    }else{
        document.getElementById("vidas").innerHTML = "Perdiste!";
    }
}

const comenzar = () => {
    ahorcado("POST", "/comenzar", {message: 1})
    .then((response => {
        document.getElementById("enviarLetraButton").disabled = false;
        letrasUsadas = [];
        rtaJson = JSON.parse(response);
        actualizarVida(rtaJson.vidas);
        actualizarLetrasUsadas(rtaJson.letrasUsadas);
        palabraDescubierta = new Array(rtaJson.palabraDescubierta.length);
        document.getElementById("letraElegidaBox").innerHTML = imprimirPalabra();
        gameOver = false;
    }))
}

const actualizarVida = (vida) => {
    vidas = vida;
    document.getElementById("imagenAhorcado").src = vidas + "vidas.jpg";
    document.getElementById("vidas").innerHTML = vidas;
}
const actualizarLetrasUsadas = (letUsadas) => {
    letrasUsadas = letUsadas;
    document.getElementById("letrasUsadasBox").innerHTML = letrasUsadas.join(' ').toUpperCase();
}

const imprimirPalabra = () => {
    palaMostrar = [];
    for(let i = 0; i < palabraDescubierta.length; i++){
        if(palabraDescubierta[i] == null){
            palaMostrar[i] = "_"
        }else{
            palaMostrar[i] = palabraDescubierta[i].toUpperCase();
        }
    }
    return palaMostrar.join("")
}

ahorcado = function (method, url, data) {
  return new Promise(function (resolve, reject) {
      var req = new XMLHttpRequest();
      req.open(method, url, true);
      req.setRequestHeader('Content-Type', 'application/json');
      req.onreadystatechange = function () {
          if (req.readyState == 4) {
              if (req.status == 200) {
                  resolve(req.response);
              } else {
                  reject((req.response));
              }
          }
      };
      req.onerror = function () {
          reject(Error("network error"));
      };
      req.send(JSON.stringify(data));
  });
};