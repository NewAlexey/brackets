module.exports = function check(str, bracketsConfig) {
    let openBrackets = [];
    let closeBrackets = [];
    let supportArray = [];
    for (let i = 0; i < bracketsConfig.length; i++) {
        openBrackets.push(bracketsConfig[i][0]);
        closeBrackets.push(bracketsConfig[i][1]);
    }
    for (let i = 0; i < str.length; i++) {
        let openIndex = openBrackets.indexOf(str[i]);
        let closeIndex = closeBrackets.indexOf(str[i]);
        if (openIndex > -1) {
            openIndex === closeIndex
                ? supportArray.length > 0 &&
                  supportArray[supportArray.length - 1] === closeIndex
                    ? supportArray.pop()
                    : supportArray.push(openIndex)
                : supportArray.push(openIndex);
        } else {
            if (supportArray.length > 0) {
                if (closeIndex !== supportArray.pop()) {
                    return false;
                }
            } else {
                return false;
            }
        }
    }
    return supportArray.length === 0 ? true : false;
};
