const reverseString = function (string) {
    const splitString = string.split("")
    const reverString = splitString.reverse()
    const finalString = reverString.join("")
    return finalString
}

module.exports = reverseString