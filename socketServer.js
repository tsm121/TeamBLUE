const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const bodyParser = require('body-parser');

const port = 4001;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
 res.setHeader('Access-Control-Allow-Origin', '*'); // Change in production
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT, DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
 next();
});


let playerId = "player1"
app.get('/newConnection', (req, res) => {
  res.status(200).json({ playerId });
  playerId = "player2";
});

let playerUpdates = {}
app.post('/update', (req, res) => {
  if (!req.body || !req.body.playerId || !req.body.update) {
    res.status(204).send({ error: 'Request lacking required fields.' });
  } else {
    playerUpdates[req.body.playerId] = req.body.update;
    res.status(200).json({ success: true });
  }
});

const server = http.createServer(app);
const io = socketIo(server);

let interval;
io.on("connection", socket => {
  console.log("New client connected");
  
  interval = setInterval(() => io.emit("FromAPI", playerUpdates), 1000);
  
  socket.on("disconnect", () => {
    clearInterval(interval);
    console.log("Client disconnected");
  });
});


server.listen(port, () => console.log(`Listening on port ${port}`));
