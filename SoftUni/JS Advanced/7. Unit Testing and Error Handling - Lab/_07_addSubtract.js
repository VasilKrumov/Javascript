function createCalculator() {
    let value = 0
    return {
        add(num) {
            value += Number(num)
        },
        subtract(num) {
            value -= Number(num)
        },
        get() {
            return value
        },
    }
}

describe('createCalculator', () => {
    it('add number should work', () => {
        const calculator = createCalculator()
        calculator.add(1)
        const expectResult = 1
        const actualResult = calculator.get()
        expect(actualResult).to.be.equal(expectResult)
    })
    it('subtract number should work', () => {
        const calculator = createCalculator()
        calculator.subtract(1)
        const expectResult = -1
        const actualResult = calculator.get()
        expect(actualResult).to.be.equal(expectResult)
    })
    it('add and subtract multiple numbers should work', () => {
        const calculator = createCalculator()
        calculator.add(1)
        calculator.subtract(1)
        calculator.add(2)
        calculator.subtract(5)
        const expectResult = -3
        const actualResult = calculator.get()
        expect(actualResult).to.be.equal(expectResult)
    })
    it('add and subtract multiple numbers and numbers as string should work', () => {
        const calculator = createCalculator()
        calculator.add('1')
        const expectResult = 1
        const actualResult = calculator.get()
        expect(actualResult).to.be.equal(expectResult)
    })
    it('add and subtract multiple numbers and numbers as string should work', () => {
        const calculator = createCalculator()
        calculator.add('a')
        calculator.subtract(1)
        calculator.add('2')
        calculator.subtract(5)
        const actualResult = calculator.get()
        // eslint-disable-next-line no-unused-expressions
        expect(actualResult).to.be.NaN
    })
    it('should return module', () => {
        const calculator = createCalculator()
        expect(typeof calculator).to.equals('object')
    })
})
