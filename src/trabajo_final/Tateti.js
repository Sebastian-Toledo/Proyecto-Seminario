

//Constante con las posiciones ganadoras
const posWin = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// creo una constante con un objeto para cambiar de turno
const turnoSig = {
    'x': 'o',
    'o': 'x'
}
//Creo un arreglo que va a contener todos los partidos
const games = []


function conexion(io){
    /*Usando io.on('connection')  configura el socket de cada cliente indicando que eventos entiende,
     con on hago referencia a escuchar y el emit a enviar un evento */
    io.on('connection', (socket) =>{       
        //console.log('new Connection');
        let mySimbolS;
        let player; //indica si es jugador o espectador
        let idSala;   
        socket.on('room:join', ({rumId}) =>{
            idSala =rumId; //guardo el id del cliente en el servidor
            socket.join(idSala); //crea o entra en una sala con el idSala
            let mySimbol;
            if (!games[idSala]) { // si no hay nada en la posicion idSala entra y crea una partida        
                player = true;
                mySimbol = 'x';
                games[idSala] = {   
                    idSala,
                    'tabla':Array(9),
                    'turn': mySimbol,
                    players: [socket.id],
                    viewersCont: 0,
                    'left': 'o',
                    inGame: true,
                    winner:null,
                    cantJ: 0 
                };
            } else{  //entra cuando ya este inicializada la partida en el arreglo games
                 //reconecxion;
                 mySimbol = games[idSala].left //le asigna el simbolo que falta
                 player = games[idSala].players.length < 2;   
                 if (player) {
                     games[idSala].players.push(socket.id); //lo agrega a la lista de player de la sala
                 }else{
                     games[idSala].viewersCont++;
                 }
                 socket.emit('reDrawTable',games[idSala].tabla);
            }   
            socket.emit('isPlayer',{player,mySimbol}); //indica que tipo de jugador sos y en caso de ser jugar te 
            //pone los clicks  en las celdas
            mySimbolS = mySimbol;     
            socket.emit('mensajeServer',idSala);
        });  
        socket.on('buttonPressed', ({pos}) =>{  
            if (player && games[idSala].inGame) {
                //console.log(`pos:${pos} = ${games[idSala].tabla[pos]}`); 
                if (games[idSala].turn === mySimbolS){     
                    let isVoid = !Boolean(games[idSala].tabla[pos]);
                    if (isVoid){
                        let sig = turnoSig[mySimbolS];
                        games[idSala].turn = sig;
                        io.to(idSala).emit('drawTable',{pos,mySimbolS,sig});//emite a todos los de la sala que escriban 
                        //en la tabla el simbolo en una posicion y cambien el sigiente                       
                    }
                    else{
                        socket.emit('error','La casilla esta ocupada');
                    }     
                }else{
                    socket.emit('error','No es tu turno');
                }
                
            }     
        })
        socket.on('changeTurn',({pos,mySimbolS}) =>{
            if (player) {
                games[idSala].tabla[pos] = mySimbolS;
                games[idSala].cantJ++;
                if ( games[idSala].cantJ>=5) {
                    if(winner(pos)){
                        if (games[idSala].winner) {
                           socket.emit('final','Ganaste la partida');//indica al socket actual que gano
                           let otherPlayer =games[idSala].players.filter(elem => elem != socket.id)[0];//filtra cual es el socket perdedor 
                           io.to(otherPlayer).emit('final','Perdiste la partida');// le manda que  perdio la partida al socket perdedor
                        }else{
                            io.to(idSala).emit('final','El juego termino en Empate');//lo envia a todos los sockets de la sala
                        }
                    }
                } 
            }
        });
        function winner(pos){
            const  combos= posWin.filter(element => element.find(elem => elem === pos));
            let isWinner;
            for(let i =0; i<combos.length; i++){
                isWinner = true;   
                const combinacion = combos[i];
                for (let l = 0; l < combinacion.length; l++) {
                    isWinner = isWinner && games[idSala].tabla[combinacion[l]] === mySimbolS 
                    if (!isWinner) {
                         break;
                     }              
                 }
                if (isWinner) {
                    games[idSala].winner = socket.id;
                    games[idSala].inGame= false;
                    break; 
                }
            }
            if(!games[idSala].tabla.includes(undefined) && !isWinner) {
                games[idSala].inGame= false;
                isWinner = true;
            }
            return isWinner;    
        }    
        socket.on('disconnect',()=>{
            if (games[idSala]) {
                if (player) {
                    let i = games[idSala].players.indexOf(socket.id);
                    if ( i !== -1 ) {
                        games[idSala].players.splice( i, 1 ); //borra al jugador de la lista de jugadores
                        games[idSala].left = mySimbolS;
                    }   
                    if (games[idSala].players.length === 0) {
                        io.to(idSala).emit('desconectar');
                        games.slice(idSala,1);//borra la sala de las salas del servidor
                    }else{               
                        games[idSala].left = mySimbolS;
                    }
                }else{
                    if (games[idSala].viewersCont!=0) {
                        games[idSala].viewersCont--;
                    }
                }          
            }
        })
    })
}

module.exports.conexion = conexion;