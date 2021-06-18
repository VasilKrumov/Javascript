const { assert } = require('chai')

function lookupChar(string, index) {
    if (typeof string !== 'string' || !Number.isInteger(index)) {
        return undefined
    }
    if (string.length <= index || index < 0) {
        return 'Incorrect index'
    }
    return string.charAt(index)
}

describe('Lookup Char', () => {
    it('', () => {
        assert.isUndefined(lookupChar(1, 0))
        assert.isUndefined(lookupChar('abc', 5.5))
        assert.isUndefined(lookupChar('abc', 'a'))
    })
    it('Index bounds', () => {
        assert.equal(lookupChar('abc', -1), 'Incorrect index')
        assert.equal(lookupChar('abc', 4), 'Incorrect index')
    })
    it('Correct index and string', () => {
        assert.equal(lookupChar('abc', 2), 'c')
        assert.equal(lookupChar('abc', 0), 'a')
    })
})
