const verifyPath = (path,pathPattern, errorCallback, successCallback) => {
    if (!pathPattern.test(path)){
        errorMsg="Not Found"
        errorCallback(errorMsg)
    }else{
        successCallback(path)
    }
};

module.exports = verifyPath;