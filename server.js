const express = require('express');
const path = require('path');
const http = require('http');
const fs = require('fs');
const url = require('url');

const app = express();
const port = process.env.PORT || 8080;

// sendFile will go here
/*app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});
*/

http.createServer((req,res)=>{
    var q = url.parse(req.url,true);
    var filename = "."+q.pathname;
    fs.readFile(filename,function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });
});

app.listen(port);
console.log('Server started at http://localhost:' + port);