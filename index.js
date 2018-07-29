const express = require('express');
/*eslint-disable*/

const app = express();

const server = app.listen(3001, function() {
    console.log('server running on port 3001');
});

const io = require('socket.io')(server);

io.on('connection', function(socket) {
    socket.on('sendUsername', function(data) {
        socket.broadcast.emit('newConnection',{sessionid: socket.id, user: data});
        console.log( data + " " + "has entered the room")
    });

});
