const calculator = require('./calculator')

describe('add', () => {
    test('adds positive numbers', () => {
        expect(new calculator().add(1, 2)).toEqual(3)
    });
    
    test('adds 0 and 0', () => {
        expect(new calculator().add(0, 0)).toEqual(0)
    });
})

describe('subtract', () => {
    test('subtract numbers', () => {
        expect(new calculator().subtract(10, 4)).toEqual(6)
    })

    test('works with negative numbers', () => {
        expect(new calculator().subtract(-10, -4)).toEqual(-6)
    })

    test('works with mixed parity numbers', () => {
        expect(new calculator().subtract(-8, 7)).toEqual(-15)
    })

    test('works with interchanged numbers', () => {
        expect(new calculator().subtract(4, 8)).toEqual(4)
    })
})

describe('divide', () => {
    test('works with positive numbers', () => {
        expect(new calculator().divide(10, 2)).toEqual(5)
    })

    test('works with 0', () => {
        expect(new calculator().divide(0, 0)).toEqual(0)
    })

    test('works with interchanged numbers', () => {
        expect(new calculator().divide(2, 6)).toEqual(3)
    })
})

describe('multiply', () => {
    test('works with positive numbers', () =>{
        expect(new calculator().multiply(3, 3)).toEqual(9)
    })

    test('works with negative numbers', () => {
        expect(new calculator().multiply(-7, -7)).toEqual(49)
    })

    test('works with mixed parity numbers', () => {
        expect(new calculator().multiply(-7, 7)).toEqual(-49)
    })

    test('works with 0', () => {
        expect(new calculator().multiply(0, 0)).toEqual(0)
    })
})