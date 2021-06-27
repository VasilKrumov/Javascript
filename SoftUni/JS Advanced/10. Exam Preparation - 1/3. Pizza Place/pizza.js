/* eslint-disable */
const pizzUni = {
    makeAnOrder(obj) {
        if (!obj.orderedPizza) {
            throw new Error('You must order at least 1 Pizza to finish the order.')
        } else {
            let result = `You just ordered ${obj.orderedPizza}`
            if (obj.orderedDrink) {
                result += ` and ${obj.orderedDrink}.`
            }
            return result
        }
    },

    getRemainingWork(statusArr) {
        const remainingArr = statusArr.filter((s) => s.status != 'ready')

        if (remainingArr.length > 0) {
            const pizzaNames = remainingArr.map((p) => p.pizzaName).join(', ')
            const pizzasLeft = `The following pizzas are still preparing: ${pizzaNames}.`

            return pizzasLeft
        }
        return 'All orders are complete!'
    },

    orderType(totalSum, typeOfOrder) {
        if (typeOfOrder === 'Carry Out') {
            totalSum -= totalSum * 0.1

            return totalSum
        }
        if (typeOfOrder === 'Delivery') {
            return totalSum
        }
    },
}

module.exports = pizzUni
