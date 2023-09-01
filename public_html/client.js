const socket = io.connect('http://localhost:5000');

const username  = document.getElementById('username');
const message   = document.getElementById('message');
const send      = document.getElementById('send');
const chat      = document.getElementById('chat');

send.addEventListener('click', function(){

    socket.emit('message', {
        username: username.value,
        message: message.value
    });

});

socket.on('new_msg', function(data){
    chat.innerHTML += '<div class="container"><strong>' + data.username + ':</strong>'+data.message +'</div>';
});
