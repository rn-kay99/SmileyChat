const express = require("express");
const app = express();
const server = app.listen(5000, () => console.log(`Listening on port 5000`)); // Make the server listen on port 3000
const io = require('socket.io')(server, {
    cors: {
      origin: '*',
    }
  });
let connectCounter = 0;

console.log("My socket server is running...");


io.on('connection', (socket) => {
    const randomNumberBetween0And5 = Math.floor(Math.random() * 6);
    
    console.log("user connected: " + socket.id);

    io.to(socket.id).emit('login', randomNumberBetween0And5);
    
    connectCounter++;

    io.sockets.emit("user_online", connectCounter);

    socket.on("message", (text) => {
        socket.broadcast.emit("message", text); // send the message to everyone except the one who sent it
        // io.sockets.emit("text", text); // send the message to everyone
    })

    socket.on("disconnect", () => { // Listen for disconnection
        console.log("user disconnected");
        connectCounter--;
        io.sockets.emit("user_online", connectCounter);
    });

    console.log("online: " + connectCounter)
});
