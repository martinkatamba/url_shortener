const parseRequestBody = (req, callback) => {
    let body = '';
    
    req.on('data', chunk => {
        body += chunk.toString();
    });
    
    req.on('end', () => {
        let parsedData;
        try {
            parsedData = JSON.parse(body); // Assuming JSON data
        } catch (error) {
            parsedData = {};
        }
        callback(parsedData);
    });
};

module.exports = { parseRequestBody };
