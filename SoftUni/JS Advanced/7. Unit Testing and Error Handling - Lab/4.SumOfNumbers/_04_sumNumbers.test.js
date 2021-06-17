const { expect } = require('chai')
const sum = require('./_04_.sumOfNumbers')

describe('Sum numbers', () => {
    it('sums single number', () => {
        expect(sum([1])).to.equal(1)
    })
})
