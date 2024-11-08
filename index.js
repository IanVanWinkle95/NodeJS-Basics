const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {

    const url = req.url

    if (url === "/") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Main Page\n');
    } else if (url === "/signin") {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1 style="color: blue">Hello User!</h1>');
        res.write('<p>Sign In or Sign Up Page</p>');
        res.end();
    } else if (url === "/info") {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1 style="color: blue">User Info!</h1>');
        res.write('<p>Check here for more indo</p>');
        res.end();
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})