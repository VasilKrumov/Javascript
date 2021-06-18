const { expect } = require('chai')
function isOddOrEven(string) {
    if (typeof string !== 'string') {
        return undefined
    }
    if (string.length % 2 === 0) {
        return 'even'
    }
    return 'odd'
}

describe('Odd or Even Functionality', () => {
    it('Test if input is undefined', () => {
        expect(isOddOrEven(undefined)).to.equal(undefined)
        expect(isOddOrEven(null)).to.equal(undefined)
        expect(isOddOrEven(1)).to.equal(undefined)
        expect(isOddOrEven(true)).to.equal(undefined)
    })
    it('It should return even with an even string', () => {
        expect(isOddOrEven('some')).to.equal('even')
        expect(isOddOrEven('or')).to.equal('even')
    })
    it('It should return even with an odd string', () => {
        expect(isOddOrEven('yay')).to.equal('odd')
        expect(isOddOrEven('awesome')).to.equal('odd')
    })
})
