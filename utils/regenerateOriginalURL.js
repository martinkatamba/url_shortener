const { getValue } = require('./redisService');

const  regenerateOriginalURL = async (shortId, errorCallback, successCallback) => {
    
        await getValue(shortId)
        .then((longUrl) => {
            successCallback(longUrl);
        })
        .catch((error) => {
            errorCallback(error);
        });
};

module.exports = regenerateOriginalURL;