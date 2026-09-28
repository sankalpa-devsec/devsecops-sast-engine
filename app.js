const http = require('http');
const url = require('url');

const PORT = process.env.PORT || 3000;

// ආරක්ෂිත ක්‍රමයක්: eval() පාවිච්චි නොකර, strict operators පමණක් parse කිරීම
function safeCalculate(a, b, op) {
    const numA = Number(a);
    const numB = Number(b);
    if (isNaN(numA) || isNaN(numB)) return null;

    switch (op) {
        case 'add': return numA + numB;
        case 'sub': return numA - numB;
        case 'mul': return numA * numB;
        default: return null;
    }
}

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    // Secure calculation endpoint without code execution flaws
    if (parsedUrl.pathname === '/calc') {
        const { a, b, op } = parsedUrl.query;
        const result = safeCalculate(a, b, op);

        if (result === null) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ error: 'Invalid parameters' }));
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ result }));
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'running', secure: true }));
});

server.listen(PORT, () => {
    console.log(`Server listening securely on port ${PORT}`);
});
