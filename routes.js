const { handleGetRequest } = require('./handlers/getHandler');
const { handlePostRequest } = require('./handlers/postHandler');
const { parseRequestBody } = require('./utils/parseRequestBody');

const handleRoutes = (req, res, path) => {
    switch (req.method) {
        case "GET":
            handleGetRequest(path, req, res);
            break;
        case "POST":
            parseRequestBody(req, (data) => {
                handlePostRequest(path, data, req, res);
            });
            break;
        default:
            res.writeHead(405, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: "Method Not Allowed" }));
            break;
    }
};

module.exports = { handleRoutes };
