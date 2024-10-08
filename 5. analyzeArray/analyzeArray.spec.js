const analyzeArray = require('./analyzeArray')

describe('analyzeArray', () => {
    test('test small numbers', () => {
        expect(analyzeArray([1,8,3,4,2,6])).toMatchObject(
            {
                average: 4,
                min: 1,
                max: 8,
                length: 6
            }
        )
    })

    test('test numbers between 3 - 9', () => {
        expect(analyzeArray([3, 9, 4, 5, 7, 6])).toMatchObject({
            average: 5,
            min: 3,
            max: 9,
            length: 6
        })
    })

    test('test big number', () => {
        expect(analyzeArray([10, 20, 30, 40, 50])).toMatchObject({
            average: 30,
            min: 10,
            max: 50,
            length: 5
        })
    })

    test('even higer numbers', () => {
        expect(analyzeArray([100, 150, 200, 250, 300])).toMatchObject({
            average: 200,
            min: 100,
            max: 300,
            length: 5
        })
    })
})