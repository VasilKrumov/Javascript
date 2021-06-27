const { expect, assert } = require('chai')
const testNumbers = require('../test')

describe('test', function () {
    describe('Testing functionality of Test Numbers', () => {
        it('It should calculate correctly if both inputs are numbers', () => {
            expect(testNumbers.sumNumbers(9, 1)).to.equal('10.00')
        })
        it('It should return undefined if both inputs are not numbers', () => {
            expect(testNumbers.sumNumbers(9, '1')).to.equal(undefined)
        })
        it('It should return calculate if numbers are positive and negative', () => {
            expect(testNumbers.sumNumbers(-10, 1)).to.equal('-9.00')
        })
        it('It should parse the input correctly and validate it - odd number', () => {
            expect(testNumbers.numberChecker('1')).to.equal('The number is odd!')
        })
        it('It should parse the input correctly and validate it - even number', () => {
            expect(testNumbers.numberChecker('2')).to.equal('The number is even!')
        })
        it('It should throw an error if the input is not a number', function () {
            assert.throw(() => testNumbers.numberChecker(undefined), Error, 'The input is not a number!')
            assert.throw(() => testNumbers.numberChecker('xyz123'), Error, 'The input is not a number!')
        })
        it('It calculate the array sum correctly', () => {
            const averageArray = [5, 10, 25, 30]
            const averageArray2 = [7, 17, 30]
            expect(testNumbers.averageSumArray(averageArray)).to.equal(17.5)
            expect(testNumbers.averageSumArray(averageArray2)).to.equal(18)
        })
    })
})
