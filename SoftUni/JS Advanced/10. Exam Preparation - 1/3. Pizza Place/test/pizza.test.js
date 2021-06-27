const { expect } = require('chai')

const pizzUni = require('../pizza')

// Solution using expect.
describe('test', function () {
    it('testing makeAnOrder', function () {
        const pizza1 = {}
        const pizza2 = { orderedPizza: 'Margarita', orderedDrink: 'CocaCola' }
        const pizza3 = { orderedPizza: 'Havana' }
        const pizza4 = { orderedDrink: 'Sprite' }
        expect(() => pizzUni.makeAnOrder(pizza1)).to.throw(
            Error,
            'You must order at least 1 Pizza to finish the order.'
        )
        expect(pizzUni.makeAnOrder(pizza2)).to.be.equal(`You just ordered Margarita and CocaCola.`)
        expect(pizzUni.makeAnOrder(pizza3)).to.be.equal(`You just ordered Havana`)
        expect(() => pizzUni.makeAnOrder(pizza4)).to.throw(
            Error,
            'You must order at least 1 Pizza to finish the order.'
        )
    })

    it('testing getRemainingWork', function () {
        const pizza1 = [
            { pizzaName: 'Margarita', status: 'preparing' },
            { pizzaName: 'Havana', status: 'preparing' },
        ]
        expect(pizzUni.getRemainingWork(pizza1)).to.be.equal(
            `The following pizzas are still preparing: Margarita, Havana.`
        )

        const pizza2 = [
            { pizzaName: 'Margarita', status: 'ready' },
            { pizzaName: 'Luchiano', status: 'ready' },
        ]
        expect(pizzUni.getRemainingWork(pizza2)).to.be.equal('All orders are complete!')

        const pizza3 = [
            { pizzaName: 'Quatro Machone', status: 'preparing' },
            { pizzaName: 'Havana', status: 'ready' },
        ]
        expect(pizzUni.getRemainingWork(pizza3)).to.be.equal(
            `The following pizzas are still preparing: Quatro Machone.`
        )
    })

    it('testing orderType', function () {
        expect(pizzUni.orderType(10, 'Carry Out')).to.deep.equal(9)
        expect(pizzUni.orderType(20, 'Delivery')).to.deep.equal(20)
    })
})

// Another solution with describe methods and separate tests.
describe('TESTS', function () {
    describe('MakeAnOrderTests', function () {
        it('test with no Pizza Obj', function () {
            const pizza1 = {}
            expect(() => pizzUni.makeAnOrder(pizza1)).to.throw(
                Error,
                'You must order at least 1 Pizza to finish the order.'
            )
        })
        it('test with pizza and drink', function () {
            const pizza2 = { orderedPizza: 'Muchacho', orderedDrink: 'Cola' }
            expect(pizzUni.makeAnOrder(pizza2)).to.equal(`You just ordered Muchacho and Cola.`)
        })
        it('test with pizza only', function () {
            const pizza3 = { orderedPizza: 'Fantacho' }
            expect(pizzUni.makeAnOrder(pizza3)).to.equal(`You just ordered Fantacho`)
        })
        it('test with drink only', function () {
            const pizza4 = { orderedDrink: 'Fanta' }
            expect(() => pizzUni.makeAnOrder(pizza4)).to.throw(
                Error,
                'You must order at least 1 Pizza to finish the order.'
            )
        })
    })
    describe('getRemainingWorkTests', function () {
        it("test with 1 preparing and 1 ready pizza's", function () {
            const order1 = [
                { pizzaName: 'Casablanca', status: 'preparing' },
                { pizzaName: 'Luchianno', status: 'ready' },
            ]
            expect(pizzUni.getRemainingWork(order1)).to.equal(`The following pizzas are still preparing: Casablanca.`)
        })
        it("test with 2 ready pizza's", function () {
            const order2 = [
                { pizzaName: 'Mustachio', status: 'ready' },
                { pizzaName: 'Gaspacho', status: 'ready' },
            ]
            expect(pizzUni.getRemainingWork(order2)).to.equal('All orders are complete!')
        })
        it("test with 2 preparing pizza's", function () {
            const order3 = [
                { pizzaName: 'Havana', status: 'preparing' },
                { pizzaName: 'Tropicana', status: 'preparing' },
            ]
            expect(pizzUni.getRemainingWork(order3)).to.equal(
                `The following pizzas are still preparing: Havana, Tropicana.`
            )
        })
    })

    describe('orderTypeTest', function () {
        it('test with delivery type of order', function () {
            expect(pizzUni.orderType(20, 'Delivery')).to.deep.equal(20)
        })

        it('test with Carry Out type of order', function () {
            expect(pizzUni.orderType(20, 'Carry Out')).to.deep.equal(18)
        })
    })
})
