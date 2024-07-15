const handleGetRequest = (path, req, res) => {
    switch (path) {
        case "/api":
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ msg: "Service is up & running ..." }));
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: "Not Found" }));
            break;
    }
};

module.exports = { handleGetRequest };
