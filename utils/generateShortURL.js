const generateShortURL = (longUrl, errorCallback, successCallback) => {
    try {
        // Simulate URL shortening logic
        const shortUrl = `https://example.com/${Math.random().toString(36).substring(2, 8)}`;
        successCallback(shortUrl);
    } catch (error) {
        errorCallback(error);
    }
};

module.exports = generateShortURL;
