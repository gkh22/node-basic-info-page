const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => {
    let q = url.parse(req.url, true);
    let filename = q.pathname === '/' ? './index.html' : `./${q.pathname}.html`;
    fs.readFile(filename, (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});

            return res.end("<h1>404</h1>");
            
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end(); 
    })
}).listen(8080);