/* eslint-disable */
describe('Class Payment Tests', function () {
    it('initialization', function () {
        expect(() => {
            new PaymentPackage('pesho')
        }).to.throw(Error)
        expect(() => {
            new PaymentPackage('', 5)
        }).to.throw(Error)
        expect(() => {
            new PaymentPackage('pesho', {})
        }).to.throw(Error)
        expect(() => {
            new PaymentPackage('pesho', -1)
        }).to.throw(Error)
        expect(() => {
            new PaymentPackage(10, 10)
        }).to.throw(Error)
        expect(() => {
            new PaymentPackage(10)
        }).to.throw(Error)
        expect(() => {
            new PaymentPackage('gosho', 12, 15)
        }).to.not.throw(Error)
    })
    it('value has validation', function () {
        const temp = new PaymentPackage('ivan', 4)
        expect(temp._value === temp.value).to.equal(true)
        expect(temp._name === temp.name).to.equal(true)
        expect(typeof temp.value).to.equal('number')
        expect(temp.hasOwnProperty('_value')).to.equal(true)
        expect(temp.hasOwnProperty('value')).to.equal(false)
        expect(temp.value).to.equal(4)
        temp.value = 5
        expect(temp.value).to.equal(5)
        expect(() => {
            temp.value = -5
        }).to.throw(Error)
        expect(() => {
            temp.value = 0
        }).to.not.throw(Error)
        expect(() => {
            temp.value = '2'
        }).to.throw(Error)
    })
    it('VAT has validation', function () {
        const temp = new PaymentPackage('ivan', 10)
        expect(temp._VAT === temp.VAT).to.equal(true)
        expect(typeof temp.VAT).to.equal('number')
        expect(temp.hasOwnProperty('_VAT')).to.equal(true)
        expect(temp.hasOwnProperty('VAT')).to.equal(false)
        expect(temp.VAT).to.equal(20)
        expect(() => {
            temp.VAT = ''
        }).to.throw(Error)
        expect(() => {
            temp.VAT = -5
        }).to.throw(Error)
        expect(() => {
            temp.VAT = NaN
            temp.toString()
        }).to.not.throw(Error)
    })
    it('active has validation', function () {
        const temp = new PaymentPackage('ivan', 10)
        expect(temp._active === temp.active).to.equal(true)
        expect(typeof temp.active).to.equal('boolean')
        expect(temp.hasOwnProperty('_active')).to.equal(true)
        expect(temp.hasOwnProperty('active')).to.equal(false)
        expect(() => {
            temp.active = null
        }).to.throw(Error)
        expect(() => {
            temp.active = NaN
        }).to.throw(Error)
    })
    it('toString test', function () {
        const temp = new PaymentPackage('HR Services', 1500)
        expect(typeof temp.name).to.equal('string')
        expect(typeof temp.toString()).to.equal('string')
        expect(typeof temp.toString).to.equal('function')
        expect(temp.hasOwnProperty('_name')).to.equal(true)
        expect(temp.hasOwnProperty('name')).to.equal(false)
        expect(temp.toString()).to.equal('Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800')
        temp.active = false
        expect(temp.toString()).to.equal(
            'Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800'
        )
        expect(() => {
            const testArr = [
                new PaymentPackage('string', 1000),
                new PaymentPackage('string', 1000),
                new PaymentPackage('string', 1000),
            ]
            testArr.join('\n')
        }).to.not.throw(Error)
    })
    //   it('value', () => {
    //     let instance = new PaymentPackage('Name', 100);
    //     assert.equal(instance.value, 100);
    //     instance.value = 40;
    //     assert.equal(instance.value, 40);
    //     assert.throw(() => { instance.value = -2 }, 'Value must be a non-negative number');
    //     assert.throw(() => { instance.value = '2' }, 'Value must be a non-negative number');
    //     assert.doesNotThrow(() => instance.value = 0);
    // });
})
