const express = require("express");
const history = require("connect-history-api-fallback");
const cors = require("cors");
const FileSaver = require("file-saver");

const app = express();

app.use(history());
app.use(cors());

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile("./public/index.html");
});

app.post("/downloads", (req, res) => {
  var blob = new Blob(["Hello, world!"], { type: "text/plain;charset=utf-8" });
  FileSaver.saveAs(blob, "hello world.txt");
  res.send({ message: "salvo" });
});

const port = 3000;

app.listen(port, () => console.log(`app rodando em http://localhost:${port}`));
