const capitalize = function(string){
    let capitalizedString = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
    return capitalizedString
}

module.exports = capitalize