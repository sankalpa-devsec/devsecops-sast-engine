const http = require('http');
const url = require('url');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    // Flaw 1: Insecure Code Execution / Eval Injection (CWE-95)
    if (parsedUrl.pathname === '/calc') {
        const userInput = parsedUrl.query.q;
        const result = eval(userInput); 
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ result }));
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'running' }));
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
