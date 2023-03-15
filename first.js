const http = require("http");
http
  .createServer((req, res) => {
    console.log(req);
    res.write("<h1>Hello How are you?</h1>");
    res.end();
  })
  .listen(4500);

const colors = require("colors");
console.log("Nice Bhai".green);
console.log(100 + 50);
