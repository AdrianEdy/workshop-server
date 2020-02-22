const http = require('http');
const url  = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path      = parsedUrl.pathname;
    const method    = req.method.toLowerCase();

    res.setHeader('Content-Type', 'text/html');
    res.end(`Pathname : ${path} Method: ${method} Author: Edy`);
})

server.listen(4000, () => {
    console.log("Server running on port 3000");
});