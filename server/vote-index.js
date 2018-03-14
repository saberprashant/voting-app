const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const port = process.env.PORT || 4002;
const index = require("./routes/index");
const app = express();


app.use(index);
const server = http.createServer(app);
const io = socketIo(server);


var poll = {
  'title': "Which cuisine is best in the world?",
  'options': ['Chinese', 'Indian', 'American', 'Italian']
}

var voteCount = {
  title: "Which cuisine is best in the world?",
  options: ['Chinese', 'Indian', 'American', 'Italian'],
  responses:{}
};

io.on("connection", function (socket) {
  console.log('a client connected');

  io.emit('polls', poll)
  io.emit('votes', voteCount)

  socket.on('polls', function(vote){
    voteCount = voteCount + count;
    io.emit('polls', voteCount);
  });

  socket.on('votes', function(selectedOpt){
    voteCount.responses[selectedOpt]=(voteCount.responses[selectedOpt])?voteCount.responses[selectedOpt]+1:1;
    io.emit('votes', voteCount);
  });
  


  socket.on("disconnect", () => console.log("Client disconnected"));
});



server.listen(port, () => console.log(`Listening on port ${port}`));