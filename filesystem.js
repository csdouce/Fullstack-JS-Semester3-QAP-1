// Using the file system module you will be able to interact with the file system. You will 
// be able to read, create, update delete or rename files among other tasks. You will need to 
// use the require statement in order to take advantage of the file system module.

// require statement for file system and http
const fs = require('fs');
const http = require('http');

// Part 1

// creating an http server
http.createServer(function (req, res) {
    // reading file
    fs.readFile('demofile1.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        // Writing data (demofile1.html) to server address
        res.write(data);
        return res.end();
    });
    // Port that is being listened too
}).listen(8080);


// Part 2

// This code will delete the file goodbye.js

// Using try ... catch to handle any errors that may happen
try {
    fs.unlinkSync('goodbye.js');
    console.log('Successfully deleted goodbye file');
} catch (err) {
    // Handle error here
    console.log(err);
}

