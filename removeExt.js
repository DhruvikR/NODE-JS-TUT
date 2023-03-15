let express = require("express");
let path = require("path");

path = path.join(__dirname, "HTML");

let app = express();

// app.use(express.static(path));
app.get("", (req, res) => {
  res.sendFile(`${path}/index.html`);
});
app.get("/about", (req, res) => {
  res.sendFile(`${path}/about.html`);
});
app.get("*", (req, res) => {
  res.sendFile(`${path}/404.html`);
});

app.listen(4000);
