const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io')
const publicPath = path.join(__dirname, '/public');
const port = process.env.PORT ||31415;

let app = express();
let server = http.createServer(app);
let io = socketio(server);

app.use(express.static(publicPath))
server.listen(port, ()=>{console.log("Server is up on "+port)});
io.on("connection", (socket)=>{
    console.log(socket.id+" just joined.")
    socket.on("disconnect", ()=>{console.log(socket.id+" has left.")});
socket.on("sent", (data)=>{
io.emit("call", data)
})
})
