const { expect } = require('chai')
const dealership = require('../03.dealership')

describe('test', () => {
    describe('newCarCost', () => {
        it('returns original price when model unsupported', () => {
            expect(dealership.newCarCost('a', 1)).to.equal(1)
        })
        it('returns discounted price', () => {
            expect(dealership.newCarCost('Audi A6 4K', 30000)).to.equal(10000)
        })
    })
    describe('carEquipment', () => {
        it('single element, single pick', () => {
            expect(dealership.carEquipment(['a'], [0])).to.deep.equal(['a'])
        })
        it('single element, single pick', () => {
            expect(dealership.carEquipment(['a', 'b', 'd'], [0, 2])).to.deep.equal(['a', 'd'])
        })

        it('single element, single pick', () => {
            expect(dealership.carEquipment(['a', 'b', 'd'], [1])).to.deep.equal(['b'])
        })
    })
    describe('euroCategory', () => {
        it('category is bellow', () => {
            expect(dealership.euroCategory(1)).to.equal(
                'Your euro category is low, so there is no discount from the final price!'
            )
        })

        it('category is above', () => {
            expect(dealership.euroCategory(5)).to.equal('We have added 5% discount to the final price: 14250.')
        })

        it('Edge case', () => {
            expect(dealership.euroCategory(4)).to.equal('We have added 5% discount to the final price: 14250.')
        })
    })
})
