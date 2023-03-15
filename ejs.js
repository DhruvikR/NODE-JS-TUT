let express = require("express");
let data = require("./data");
let path = require("path");

path = path.join(__dirname, "HTML");

let app = express();
app.set("view engine", "ejs");

app.get("", (req, res) => {
  res.sendFile(`${path}/index.html`);
});
app.get("/about", (req, res) => {
  res.sendFile(`${path}/about.html`);
});
app.get("/profile", (req, res) => {
  res.render("profile", { data });
});
app.get("*", (req, res) => {
  res.sendFile(`${path}/404.html`);
});

app.listen(4000);
