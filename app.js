const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send({ message: "Hello World!" });
  });

  app.post("/new", (req, res) => {
    res.status(200).send({ message: "New" });
  });

module.exports = app;