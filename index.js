const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const { chats } = require("./data/data.js");

app.get("/", (req, res) => {
  res.send("get request");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  //   console.log(req.params.id);
  const chat = chats.find((c) => c._id === req.params.id);
  res.send(chat);
});

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`app is litening on ${port}`);
});
