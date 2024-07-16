const shortid = require('shortid');

const SHORT_URL_BASE = process.env.SHORT_URL_BASE || 'http://127.0.0.1:5000';

const generateShortURL = (longUrl, errorCallback, successCallback) => {
    try {
        const id = shortid.generate();
        const shortUrl = `${SHORT_URL_BASE}/${id}`;
        successCallback(shortUrl,id);
    } catch (error) {
        errorCallback(error);
    }
};

module.exports = generateShortURL;
