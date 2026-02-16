const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const { getOrderBook } = require("./orderbook");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.get("/orderbook", (req, res) => {
  res.json(getOrderBook());
});

wss.on("connection", (ws) => {
  ws.send(JSON.stringify(getOrderBook()));
});

server.listen(4000, () => {
  console.log("ASTERO backend running on port 4000");
});
