const EventEmitter = require("events");
const http = require("http");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`name: ${name}, id:${id}`);
});

customEmitter.emit("response", "john", 34);

// / using the event emitter API
const server = http.createServer();

// emmit request events
// subscribe to it / listen for it / respond to it

server.on("request", (req, res) => {
  res.end("welcome to the emitter page");
});

server.listen(5000, () => {
  console.log("Server listening on port 5000 ☑️");
});
