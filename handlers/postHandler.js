const generateShortURL = require('../utils/generateShortURL');
const { setValue } = require('../utils/redisService');

const handlePostRequest = (path, data, req, res) => {
    switch (path) {
        case "/api/v1/short-urls":
            const longUrl = data["longUrl"];
            
            generateShortURL(longUrl, 
                (error) => {
                    console.error(error);
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: "Internal Server Error" }));
                }, 
                (shortUrl,id) => {
                    
                    setValue(id, longUrl)
                    .then((result) => {
                        console.log('Value set successfully:', result);
                        res.writeHead(201, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({
                            shortUrl: shortUrl,
                            longUrl: longUrl
                        }));
                    })
                    .catch((error) => {
                        console.error('Error setting value:', error);
                        res.writeHead(500, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ error: "Internal Server Error" }));
                    });

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
