const reqFilter = require("./middleware");
const express = require("express");
const app = express();

// app.use(reqFilter);

const route = express.Router();

route.use(reqFilter);

app.get("/", (req, res) => {
  res.send("Welcome to home page");
});
app.get("/about", reqFilter, (req, res) => {
  res.send("Welcome to about page");
});
route.get("/profile", (req, res) => {
  res.send("Welcome to profile page");
});
route.get("/contect", (req, res) => {
  res.send("Welcome to contect page");
});

app.use("/", route);

app.listen(5000);
