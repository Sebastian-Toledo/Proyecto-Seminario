const  socket = io.connect();

let userName = document.getElementById('userSend');


function enviar(game){
    socket.emit(game, userName.value)
}