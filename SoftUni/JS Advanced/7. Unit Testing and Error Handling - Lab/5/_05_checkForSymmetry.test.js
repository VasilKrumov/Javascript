const { expect } = require('chai')
const isSymmetric = require('./5.isSymmetric')

describe('isSymmetric', () => {
    it('returns true for valid symetric input', () => {
        expect(isSymmetric([1, 1])).to.true
    })

    it('returns false for valin non symetric input', () => {
        expect(isSymmetric([1, 2])).to.be.false
    })

    it('returns false for inavlid argument', () => {
        expect(isSymmetric('a')).to.be.false
    })

    it('returns false for type diff elements', () => {
        expect(isSymmetric([1, '1'])).to.be.false
    })

    // test overloading
    it('returns true for valid symetric odd element arr', () => {
        expect(isSymmetric([1, 1, 1])).to.true
    })

    it('returns true for valid symetric string arr', () => {
        expect(isSymmetric(['a', 'a'])).to.true
    })

    it('returns false for valid non-symetric string arr', () => {
        expect(isSymmetric(['a', 'b'])).to.be.false
    })
})
