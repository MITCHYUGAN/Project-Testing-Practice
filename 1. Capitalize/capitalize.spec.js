const capitalize = require('./capitalize')

describe('capitalize', () => {
    test('works with a single word', () => {
        expect(capitalize('hello')).toBe('Hello')
    });

    test('work with black space', () => {
        expect(capitalize('')).toBe('')
    })
})