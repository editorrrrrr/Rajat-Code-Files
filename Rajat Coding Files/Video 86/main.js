// const { createServer } = require('node:http');
// const fs = require("fs")
import http from"http"
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end("hello i am from gwalior and i am a student of mits gwalior");
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});