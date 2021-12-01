const socket = io();

/*const init = function(){
    var rumId = window.location.href.indexOf('?roomId=').valueOf();
    if(rumId === -1){
        //soy el creador de la sala
        rumId = socket.id;
        document.getElementById('tableId').value = window.location.href + "?roomId=" + rumId;
        document.getElementById('turno').innerText = 'Turno: x';
    }else{
        //me invitaron
        rumId = window.location.href.substr(-20,window.location.href.indexOf('?roomId='));
        document.getElementById('turno').innerText = 'Turno: x';
    }  
    socket.emit('room:join',{rumId});
}
*/

const init = function(){
    var rumId = window.location.href.indexOf('?roomId=').valueOf();
    if(rumId === -1){
        //soy el creador de la sala
        rumId = Math.floor(Math.random()*(999-100)+100);      
        document.getElementById('tableId').value = window.location.href + "?roomId=" + rumId;
        document.getElementById('turno').innerText = 'Turno: x';
    }else{
        //me invitaron
        rumId =Number(window.location.href.substr(-3,window.location.href.indexOf('?roomId=')));
        document.getElementById('turno').innerText = 'Turno: x';
    }  
    socket.emit('room:join',{rumId});
}

socket.on('connect',init);



const copyLink = function(){
    const elem = document.getElementById('tableId');
    elem.select();
    document.execCommand('copy');
}

socket.on('mensajeServer',(data) =>{
    let salaNum=0;
    console.log(`Estas en la sala ${data}`);
    salaNum = data;
})

socket.on('reDrawTable',(tabla)=>{
    const pElem = document.createElement('p');
    pElem.className='piece';
    for (let i = 0; i < tabla.length; i++) {
        pElem.innerText =  tabla[i];
        document.getElementById(`${i}`).innerHTML = pElem.outerHTML; ;      
    }
})

socket.on('drawTable',({pos,mySimbolS,sig}) =>{
   console.log('entre');
   document.getElementById('turno').innerText = `Turno: ${sig}`;
   socket.emit('changeTurn',{pos,mySimbolS});
   const pElem = document.createElement('p');
   pElem.className = 'piece';
   pElem.innerText = mySimbolS;
   document.getElementById(`${pos}`).innerHTML = pElem.outerHTML;
   document.getElementById('error').innerText = "";
})
function confirmar() {
    socket.emit('confirmacion');
}

socket.on('confirmacion',(message)=>{
    console.log(message);
})
socket.on('error',(msg)=>{
    document.getElementById('error').innerText= msg;
})
socket.on('final',(msg) => {
    document.getElementById('error').innerText = msg;
})

socket.on('isPlayer',({player,mySimbol}) =>{
    console.log(`player vale: ${player}`);
    if (player) {
        document.getElementById('jugador').innerText = `Sos el jugador: ${mySimbol}`;
        for (let pos = 0; pos < 9; pos++) {      
            document.getElementById(`${pos}`).addEventListener('click', () =>{                                  
                socket.emit('buttonPressed',{pos});                         
           })                   
        }
    }else{
        document.getElementById('jugador').innerText = 'Sos un espectador';
    }

})