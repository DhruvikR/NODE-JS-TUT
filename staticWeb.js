let express = require("express");
let path = require("path");

path = path.join(__dirname, "HTML");

let app = express();

app.use(express.static(path));

app.listen(4000);
