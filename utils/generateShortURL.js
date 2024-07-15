const SHORT_URL_BASE = process.env.SHORT_URL_BASE || 'http://127.0.0.1:5000';

const generateShortURL = (longUrl, errorCallback, successCallback) => {
    try {
        // Simulate URL shortening logic
        const shortUrl = `${SHORT_URL_BASE}/${Math.random().toString(36).substring(2, 8)}`;
        successCallback(shortUrl);
    } catch (error) {
        errorCallback(error);
    }
};

module.exports = generateShortURL;
