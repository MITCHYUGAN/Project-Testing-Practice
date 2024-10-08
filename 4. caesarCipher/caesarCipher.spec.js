const caesarCipher = require("./caesarCipher")

describe('caesarCipher', () => {
    test('with one lette', () => { 
        expect(caesarCipher("a", 3)).toBe("d")
     })

     test('test with multiple letters', () => {
        expect(caesarCipher("xyz", 3)).toBe("abc")
     })

     test('works with capitalized letters also', () => {
        expect(caesarCipher("bOy", 3)).toBe("eRb")
     })

     test('works with multiple words, word break, and punctuation', () => {
        expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!")
     })
})