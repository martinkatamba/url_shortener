const verifyPath = require('../utils/verifyPath');
const regenerateOriginalURL = require('../utils/regenerateOriginalURL');

const handleGetRequest = (path, req, res) => {
    const pathPattern = /^\/[a-zA-Z0-9]{6}$/;

    const sendResponse = (statusCode, message) => {
        res.writeHead(statusCode, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(message));
    };

    switch (path) {
        case "/api":
            sendResponse(200, { msg: "Service is up & running ..." });
            break;
        default:
            verifyPath(path, pathPattern, 
                (errorMsg) => {
                    sendResponse(404, { error: errorMsg });
                }, 
                (validPath) => {
                    const shortId = validPath.substring(1);

                    regenerateOriginalURL(shortId, 
                        (error) => {
                            sendResponse(404, { error: error });
                        }, 
                        (longUrl) => {
                            console.log(longUrl);
                            // Redirect to the original URL
                            res.writeHead(302, { Location: longUrl });
                            res.end();
                        }
                    );
                }
            );
            break;
    }
};

module.exports = { handleGetRequest };
