const verifyPath = (path,pathPattern, errorCallback, successCallback) => {
    if (!pathPattern.test(path)){
        errorMsg="Invalid Path"
        errorCallback(errorMsg)
    }else{
        successCallback(path)
    }
};

module.exports = verifyPath;