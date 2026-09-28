const http = require('http');

const PORT = process.env.PORT || 3000;

function handleCalculate(query, res) {
    const numA = Number(query.get('a'));
    const numB = Number(query.get('b'));
    const op = query.get('op');

    if (Number.isNaN(numA) || Number.isNaN(numB)) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'Parameters must be valid numbers' }));
    }

    let result = 0;
    if (op === 'add') result = numA + numB;
    else if (op === 'sub') result = numA - numB;
    else if (op === 'mul') result = numA * numB;
    else {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'Invalid operator' }));
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ result }));
}

const server = http.createServer((req, res) => {
    const reqUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);

    if (reqUrl.pathname === '/calc') {
        return handleCalculate(reqUrl.searchParams, res);
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'UP', secure: true }));
});

server.listen(PORT, () => {
    console.log(`Server running securely on port ${PORT}`);
});
