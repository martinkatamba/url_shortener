const http = require('http');
const url = require('url');
const { handleRoutes } = require('./routes');

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    const path = parsedUrl.pathname;
    handleRoutes(req, res, path);
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
