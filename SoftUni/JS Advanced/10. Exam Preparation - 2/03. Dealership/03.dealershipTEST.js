// this is an solution with assert

const { describe } = require('mocha')
const { assert } = require('chai')
const { expect } = require('chai')
const { carEquipment } = require('./03.dealership')
const dealership = require('./03.dealership')

describe('test', () => {
    it('newCarCost', () => {
        assert.equal(dealership.newCarCost('a', 4), 4)
        assert.equal(dealership.newCarCost('Audi A4 B8', 30000), 15000)
    })

    it(`carEquipment`, () => {
        assert.deepEqual(dealership.carEquipment(['a'], [0]), ['a'])
        assert.deepEqual(dealership.carEquipment(['a', 'b', 'y'], [1, 2]), ['b', 'y'])
        assert.deepEqual(dealership.carEquipment(['a', 'b', 'y'], [1]), ['b'])
    })

    it('euroCategory', () => {
        assert.equal(
            dealership.euroCategory(3),
            'Your euro category is low, so there is no discount from the final price!'
        )
        assert.equal(dealership.euroCategory(4), `We have added 5% discount to the final price: 14250.`)
        assert.equal(dealership.euroCategory(7), `We have added 5% discount to the final price: 14250.`)
    })
})

// Test with more describe methods using expect.
describe('test', function () {
    describe('newCarCostTest', function () {
        it('test with oldCar property', function () {
            expect(dealership.newCarCost('Audi A6 4K', 30000)).to.deep.equal(10000)
        })
        it('test without oldCar property', function () {
            expect(dealership.newCarCost('Trabant 1990', 1500)).to.deep.equal(1500)
        })
    })

    describe('carEquipmentTest', function () {
        it('test1', function () {
            const extrasArr = ['Seat Heat', 'Rims', 'Safety Belt']
            const indexArr = [1, 2]

            expect(dealership.carEquipment(extrasArr, indexArr)).to.deep.equal(['Rims', 'Safety Belt'])
        })

        it('test2', function () {
            const extrasArr = ['Seat Heat', 'Rims', 'Safety Belt', 'Heating Mirrors', 'Bigger Engine']
            const indexArr = [0, 2, 4]

            expect(dealership.carEquipment(extrasArr, indexArr)).to.deep.equal([
                'Seat Heat',
                'Safety Belt',
                'Bigger Engine',
            ])
        })
    })

    describe('euroCategoryTest', function () {
        it(`test with higher than euro 4 category`, function () {
            expect(dealership.euroCategory(5)).to.equal(`We have added 5% discount to the final price: 14250.`)
        })

        it('test with euro 4 category', function () {
            expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: 14250.`)
        })

        it('test with euro 3 category', function () {
            expect(dealership.euroCategory(3)).to.equal(
                'Your euro category is low, so there is no discount from the final price!'
            )
        })
    })
})
