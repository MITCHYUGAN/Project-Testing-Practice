const caesarCipher = function (string, shiftIndex) {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'
    const splitedAlphabets = alphabets.split("")

    // console.log(shiftCharacter(string, splitedAlphabets, shiftIndex));
    return shiftCharacter(string, splitedAlphabets, shiftIndex)
}


const shiftCharacter = function (strings, alphabets, shiftIndex) {
    const splitedString = strings.split("")
    const shiftedString = splitedString.map(char => {
        // works with lowercase char
        if (alphabets.includes(char)) {
            let currentIndex = alphabets.indexOf(char)
            let newIndex = (currentIndex + shiftIndex) % alphabets.length
            if(newIndex < 0) newIndex += alphabets.length
            return alphabets[newIndex]
        } else if(alphabets.includes(char.toLowerCase())){
            // works with upperCase char
            let currentIndex = alphabets.indexOf(char.toLowerCase())
            let newIndex = (currentIndex + shiftIndex) % alphabets.length;
            if (newIndex < 0) newIndex += alphabets.length;
            return alphabets[newIndex].toUpperCase()
        }

        return char
    })

    return shiftedString.join("")
}





// Test the function
console.log(caesarCipher('Hello, World!', 3)); // Should return 'Khoor, Zruog!'
console.log(caesarCipher('xyz', 3)); // Should return 'abc'
console.log(caesarCipher('ABC', -1)); // Should return 'ZAB'




module.exports = caesarCipher