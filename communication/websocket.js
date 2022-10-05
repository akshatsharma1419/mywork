// socket.IO
/*
It is is bidirectional way of communication
The connection stays open 
 */

// Install socket.io and socket.io-client

// Server Side
const io = require("socket.io")(3000, {
  cors: { origin: ["*"] },
});

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("message-client", (msg) => {
    // Emit sends message to all client
    io.emit("messaage-server", msg);
    // Send message to all other client except self
    socket.broadcast.emit("message-server", message);
    console.log(msg);
  });

  socket.on("join-room", (room) => {
    socket.join(room);
  });
});

// Client side
import { io } from "socket.io-client";

const socket = io("<url-of-server-with-port>");

// To check if successfully connected with server
socket.on("connect", () => {
  console.log(socket.id);
});

// Send event from client to server
// First name can be named to anything
socket.emit("message-client", "Hello");

socket.on("message-server", (msg) => {
  console.log("Msg from server", msg, socket.id);
});

// Join a particular room
const roomID = 123;
socket.emit("join-room", roomID);
