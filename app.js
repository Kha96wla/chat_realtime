const express = require('express');
const socket  = require('socket.io');

const app = express();

const server = app.listen(5000, function() {
    console.log('Your Server Is Running at http:/localhost:5000');
});

app.use(express.static('public_html'));

const sio = socket(server);

sio.on('connection', function(visitor) {
    
    console.log('we have a new visitor as id => ', visitor.id);
    visitor.on('message', function(data){
        sio.sockets.emit('new_msg', data);
    });
});

