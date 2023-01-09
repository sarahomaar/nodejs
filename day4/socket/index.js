const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const http = require("http");
const httserver = http.createServer(app);
const io = require("socket.io")(httserver);


app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

io.on("connection", (client) => {
  console.log(client.id);
  client.on("sendmsg", function (data) {
    client.broadcast.emit("msg", data);
  });
});

httserver.listen(port, () => console.log(`listen in ${port}`));