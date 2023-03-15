const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<h1>Home Page</h1>");
  }
  if (req.url === "/about") {
    res.write(
      `<p>This is teh history page</p> <h1>HEEEE...</h1><br>
      <a href='/'>go to home page</a>`
    );
  }
  if (req.url === "/contect") {
    res.write(
      `<p>Welcome to contect page contect</p>
      <h1> Mail=12@ghmail.cm</h1>
      <a href='/'>go to home page</a>`
    );
  }
  res.write(
    ` <h1>This is Not Working Page</h1><br>
        <p>Please Try leter on this page </p>
        <a href='/'>go to home page</a>`
  );
});

server.listen(5000);
