const http = require("http");

// the request and the response
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage");
  }
  if (req.url === "/about") {
    res.end("This is our aboutus page");
  }
  res.end(
    `<h1>oops!</h1>
    <p>we can't seem to find the page you are looking for</p>
    <a href='/'>Go home</a>
    `
  );
});

server.listen(5000);
