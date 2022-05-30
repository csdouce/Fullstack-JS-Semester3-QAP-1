// This module is built into Node. This module allows a developer to transfer data over the 
// HTTP protocol. A require statement is required. The module will allow the HTTP server to 
// listen to server ports and provide a response to the client.

// Creating a HTTP server
const http = require('http');

// Declaring hostname & port variable
const hostname = '127.0.0.1';
const port = 5500;

// Creating the HTTP server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('This is an HTTP Server. Created by Chris Doucette for QAP 1 Semester 3 FullStack');
});

// Listening to the server at provided port / hostname
server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
});