const express = require('express');
const tateti = require('./Tateti');
const SocketIO = require('socket.io');
const app = express();
const front = require('./public/ahorcado/front')
const palabras = require(__dirname + '/palabras.json');
const bodyparser = require('body-parser');
const { request } = require('express');

app.set('port', process.env.PORT || 3000);

app.set('port', process.env.PORT || 3000); //el puerto que va a escuchar cuando levante el server

app.use(express.static('public')); //por los links puedo levantar todas los archivos de public

const server = app.listen(app.get('port'), ()=>{
    console.log('server on port', app.get('port'));
})// con el app.listen levanta el server en el puerto 3000 y hace que escuche los eventos

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

// Ahorcado

var letrasUsadas;
var palabraElegida;
var palabraDescubierta = [];
var data = {
    gameOver: false,
    existe: false,
    vidas: 0,
    letrasUsadas,
    palabraDescubierta,
    palabraElegida
}

app.post('/comenzar', (req, res) => {
    palabraElegida = seleccionarPalabra();
    console.log(palabraElegida);
    data.existe = false;
    data.gameOver = false;
    data.vidas = 6;
    data.palabraElegida = palabraElegida;
    data.letrasUsadas = [];
    data.palabraDescubierta = new Array(palabraElegida.length);
    res.send(data);
  })

const seleccionarPalabra = () => {
    max = Math.floor(palabras.length - 1);  
    palabraElegida = palabras[Math.floor(Math.random() * max)];
    return palabraElegida.palabras;
}

app.post('/letra', (req, res) => {              //!Refactorizar y dejar un solo send al final, con el objeto modificado
    letraEnv = req.body.letraEnviada;
    data.letrasUsadas.push(letraEnv);
    if(palabraElegida.includes(letraEnv)) //Incluye la letra
    {
        for(let i = 0; i < palabraElegida.length; i++) //reviso todas las apariciones de la letra en la palabra
        {
            if(palabraElegida[i] == letraEnv){ //completo el arreglo de letras descubiertas
                data.palabraDescubierta[i] = letraEnv
            }
        }if(data.palabraDescubierta.join('') == palabraElegida) //Gano
        {
            data.gameOver = true;
        }else{                                              //La letra está en la palabra
            data.existe = true;
        }
    }else{                        
        data.existe = false;                          //La letra no esta incluida
        data.vidas--;
        if(data.vidas == 0){                                     //No tiene más vidas
            data.gameOver = true;
            data.message = "Perdiste!"
        }else{
            data.message = "No existe la letra elegida en la palabra."
        }
    }
    res.send(data)
})

//instancio un server inicializado al socketio
const io = SocketIO(server);

tateti.conexion(io);

app.get('/tateti/tateti.html', (request,response)=> {
    console.log('hola');
})