const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const app = express();
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);


app.use(bodyParser.json());
app.set('view engine', 'ejs')
.use(express.static(__dirname + '/public'))
.use('/', require('./prove10'))

io.on('connection', (socket) => {
    console.log('A user just connected');
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    })
});

io.on('connection', (socket) => {
    socket.on('new hero', (msg) => {
      io.emit('new hero', msg);
    });
  });

server.listen(process.env.PORT || 3000, () => {
    console.log('Listening on 3000');
})

//app.listen(process.env.PORT || 3000);

