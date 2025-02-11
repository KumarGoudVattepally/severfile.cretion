const http = require('http');
const url = require('url');

const server = http.createServer(async (req, res) => {
    if (req.method === 'GET') {
        const parsedUrl = url.parse(req.url, true); // Parse the URL
        const queryParams = parsedUrl.query; // Get query parameters

        try {
            const result = await fetchData(queryParams);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: true, data: result }));
        } catch (error) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: false, message: error.message }));
        }
    } else {
        res.writeHead(405, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: 'Method not allowed' }));
    }
});

// Mock async function to simulate data fetching
const fetchData = async (params) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ params, message: 'Data fetched successfully' });
        }, 1000);
    });
};

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
