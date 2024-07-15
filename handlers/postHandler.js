const handlePostRequest = (path, data, req, res) => {
    switch (path) {
        case "/shorten-url":
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(data));
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: "Not Found" }));
            break;
    }
};

module.exports = { handlePostRequest };
