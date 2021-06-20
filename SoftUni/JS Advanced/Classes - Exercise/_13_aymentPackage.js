/* eslint-disable */
describe('StringBuilder', () => {
    describe('constructor', () => {
        // Extra test that is correct and would be good to verify this, but should not be needed in practice
        // as it would require intentionally written wrong code to break this
        // it('Should create an instance of StringBuilder', () => {
        //     let sb = new StringBuilder();
        //     expect(sb instanceof StringBuilder).to.be.true;
        // });

        it('Should initialize with empty when passed undefined', () => {
            const sb = new StringBuilder()
            expect(sb.toString()).to.equal('')
        })

        it('Should throw when called with a non-string', () => {
            expect(() => new StringBuilder(25)).to.throw(TypeError, 'Argument must be a string')
            expect(() => new StringBuilder(null)).to.throw(TypeError, 'Argument must be a string')
        })

        it('Should initialize with correct value passed a valid string', () => {
            const expected = 'hello'
            const sb = new StringBuilder(expected)
            expect(sb.toString()).to.equal(expected)
        })
    })

    describe('append', () => {
        it('Should throw when called with a non-string', () => {
            const sb = new StringBuilder()
            const invalidString = 1.23
            expect(() => sb.append(invalidString)).to.throw(TypeError, 'Argument must be a string')
            expect(() => sb.append(true)).to.throw(TypeError, 'Argument must be a string')
        })

        it('Should append string at the end when passed a valid string', () => {
            const initial = 'test'
            const validString = 'wow'
            const validString2 = 'haha'
            const expected = 'testwow'
            const expected2 = 'testwowhaha'

            const sb = new StringBuilder(initial)

            sb.append(validString)
            expect(sb.toString()).to.equal(expected)

            sb.append(validString2)
            expect(sb.toString()).to.equal(expected2)
        })

        it('Should correctly append only the passed string chars', () => {
            const initial = 'test'
            const validString = 'wow'
            const validString2 = '123'

            const expected = 'testwow'
            const expected2 = 'testwow123'
            const expected3 = 'testwow23'

            const sb = new StringBuilder(initial)

            sb.append(validString)
            expect(sb.toString()).to.equal(expected)

            sb.append(validString2)
            expect(sb.toString()).to.equal(expected2)

            sb.remove(7, 1)
            expect(sb.toString()).to.equal(expected3)
        })
    })

    describe('prepend', () => {
        it('Should throw when called with a non-string', () => {
            const sb = new StringBuilder()
            const invalidString = undefined
            expect(() => sb.prepend(invalidString)).to.throw(TypeError, 'Argument must be a string')
            expect(() => sb.prepend(true)).to.throw(TypeError, 'Argument must be a string')
        })

        it('Should prepend string to the beginning when passed a valid string', () => {
            const initial = 'car'
            const sb = new StringBuilder(initial)
            const validString = 'fast '
            const validString2 = 'very '
            const expected = 'fast car'
            const expected2 = 'very fast car'

            sb.prepend(validString)
            expect(sb.toString()).to.equal(expected)

            sb.prepend(validString2)
            expect(sb.toString()).to.equal(expected2)
        })

        it('Should correctly prepend only the passed string chars', () => {
            const initial = 'car'
            const sb = new StringBuilder(initial)
            const validString = 'fast '
            const validString2 = 'very '

            const expected = 'fast car'
            const expected2 = 'very fast car'
            const expected3 = 'very fat car'
            sb.prepend(validString)
            expect(sb.toString()).to.equal(expected)

            sb.prepend(validString2)
            expect(sb.toString()).to.equal(expected2)

            sb.remove(7, 1)
            expect(sb.toString()).to.equal(expected3)
        })
    })

    describe('insertAt', () => {
        it('Should throw when called with a non-string', () => {
            const sb = new StringBuilder()
            const invalidString = undefined
            expect(() => sb.insertAt(invalidString, 0)).to.throw(TypeError, 'Argument must be a string')
            expect(() => sb.insertAt(22, 0)).to.throw(TypeError, 'Argument must be a string')
        })

        it('Should insert chars at target index when passed a valid string', () => {
            const initial = 'car'
            const sb = new StringBuilder(initial)
            const validString = 'very '
            const validString2 = 'fast '

            const expected = 'very car'
            const expected2 = 'very fast car'

            sb.insertAt(validString, 0)
            expect(sb.toString()).to.equal(expected)

            sb.insertAt(validString2, 5)
            expect(sb.toString()).to.equal(expected2)
        })

        it('Should correctly insert only chars', () => {
            const initial = ' faast'
            const sb = new StringBuilder(initial)
            const validString = 'car'
            const validString2 = 'is '

            const expected = 'car faast'
            const expected2 = 'car is faast'
            const expected3 = 'car is fat'

            sb.insertAt(validString, 0)
            expect(sb.toString()).to.equal(expected)

            sb.insertAt(validString2, 4)
            expect(sb.toString()).to.equal(expected2)

            sb.remove(9, 2)
            expect(sb.toString()).to.equal(expected3)
        })
    })

    describe('remove', () => {
        it('Should remove the specified length at target index', () => {
            const initial = 'cars are fast'
            const sb = new StringBuilder(initial)

            const expected = 'c are fast'
            const expected3 = 'c are fat'

            sb.remove(1, 3)
            expect(sb.toString()).to.equal(expected)

            sb.remove(8, 1)
            expect(sb.toString()).to.equal(expected3)
        })
    })

    describe('toString', () => {
        it('Should return correct string representation', () => {
            const initial = 'testing'
            const sb = new StringBuilder(initial)
            expect(sb.toString()).to.equal(initial)
        })

        it('Should return empty string when string builder is empty', () => {
            const sb = new StringBuilder()
            expect(sb.toString()).to.equal('')
            const sb2 = new StringBuilder('test')
            sb2.remove(0, 4)
            expect(sb2.toString()).to.equal('')
        })
    })
})
