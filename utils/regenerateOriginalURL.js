

const regenerateOriginalURL = (shortId, errorCallback, successCallback) => {
    try {
        const longUrl = `https://www.example.com/some/long/url`;
        successCallback(longUrl);
    } catch (error) {
        errorCallback(error);
    }
};

module.exports = regenerateOriginalURL;