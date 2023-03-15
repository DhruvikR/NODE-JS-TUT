let express = require("express");
let data = require("./data");

let app = express();

app.get("", (req, res) => {
  res.send(data);
});

app.get("/about", (req, res) => {
  console.log("Request send by Dk PC = " + req.query.name);
  res.send("This is about page data " + req.query.name);
  //   res.send(data); //this is not work
});

app.get("/help", (req, res) => {
  res.send("This is help page data");
  //   res.send(data); //this is not work
});

app.listen(4000);
