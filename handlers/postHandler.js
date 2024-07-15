const generateShortURL = require('../utils/generateShortURL');

const handlePostRequest = (path, data, req, res) => {
    switch (path) {
        case "/api/short-urls":
            const longUrl = data["longUrl"];
            
            generateShortURL(longUrl, 
                (error) => {
                    console.error(error);
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: "Internal Server Error" }));
                }, 
                (shortUrl) => {
                    res.writeHead(201, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({
                        shortUrl: shortUrl,
                        longUrl: longUrl
                    }));
                }
            );
            break;
            
        default:
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: "Not Found" }));
            break;
    }
};

module.exports = { handlePostRequest };
