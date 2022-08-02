const express = require("express");
const app = express();

app.get("/greeting", (req, res) => {
  res.send({ hi: "there" });
});

const PORT = process.env.PORT;
app.listen(5000);
