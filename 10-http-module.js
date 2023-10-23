const http = require("http");

// the request and the response
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage");
  } else if (req.url === "/about") {
    // blocking code
    // for (let i = 0; i < 1000; i++) {
    //   for (let j = 0; j < 1000; j++) {
    //     console.log(`${i} ${j}`);
    //   }
    // }
    res.end("This is our aboutus page");
  } else {
    res.end(
      `<h1>oops!</h1>
    <p>we can't seem to find the page you are looking for</p>
    <a href='/'>Go home</a>
    `
    );
  }
});

server.listen(5000, () => {
  console.log("Server listening on port 5000 ☑️");
});
