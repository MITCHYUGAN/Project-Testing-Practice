const reverseString = require('./reverseString')

describe('reverseString', () => {
    test('Works with single word', () => {
        expect(reverseString("hello")).toBe('olleh')
    });

    test('works with capital letters', () => {
        expect(reverseString('Hello')).toBe('olleH')
    })

    test('works with multiple words', () => {
        expect(reverseString('I am a boy')).toBe('yob a ma I')
    });

    test('works with numbers and punctuation', () => {
        expect(reverseString('123! abc! Hello, Odinite.')).toBe(
            '.etinidO ,olleH !cba !321'
        )
    })

    test('works with blank string', () => {
        expect(reverseString('')).toBe('')
    })
})