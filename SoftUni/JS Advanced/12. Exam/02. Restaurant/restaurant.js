/* eslint-disable class-methods-use-this */
class Restaurant {
    budgetMoney

    menu = {}

    stockProducts = {}

    history = []

    constructor(budget) {
        this.budgetMoney = +budget
    }

    parseProduct(productString) {
        return productString.split(' ')
    }

    addProduct(productName, productQuantity) {
        if (this.stockProducts[productName]) {
            this.stockProducts[productName] += parseInt(productQuantity, 10)
        } else {
            this.stockProducts[productName] = parseInt(productQuantity, 10)
        }
    }

    loadProducts(products) {
        products.map(this.parseProduct).forEach((productData) => {
            const [productName, productQuantity, productTotalPrice] = productData
            if (productTotalPrice > this.budgetMoney) {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`)
            } else {
                this.budgetMoney -= parseInt(productTotalPrice, 10)
                this.addProduct(productName, productQuantity)
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`)
            }
        })
        return this.history.join('\n')
    }

    addToMenu(meal, neededProducts, price) {
        if (this.menu[meal]) {
            return `The ${meal} is already in the our menu, try something different.`
        }
        this.menu[meal] = {
            products: neededProducts.map(this.parseProduct),
            price,
        }
        const mealsCount = Object.keys(this.menu).length
        if (mealsCount === 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
        }
        return `Great idea! Now with the ${meal} we have ${mealsCount} meals in the menu, other ideas?`
    }

    showTheMenu() {
        const menuKeys = Object.keys(this.menu)
        if (!menuKeys.length) {
            return `Our menu is not ready yet, please come later...`
        }
        return menuKeys.map((mealName) => `${mealName} - $ ${this.menu[mealName].price}\n`).join('\n')
    }

    makeTheOrder(mealName) {
        const meal = this.menu[mealName]
        if (!meal) {
            return `There is not ${mealName} yet in our menu, do you want to order something else?`
        }

        let isOrderDeliverable = true
        const mealPrice = meal.price
        const mealProducts = meal.products
        mealProducts.forEach(([productName, productQuantity]) => {
            const newProductQuantity = this.stockProducts[productName] - parseInt(productQuantity, 10)
            if (!this.stockProducts[productName] || newProductQuantity < 0) {
                isOrderDeliverable = false
            } else {
                this.stockProducts[productName] = newProductQuantity
            }
        })
        if (!isOrderDeliverable) {
            return `For the time being, we cannot complete your order (${mealName}), we are very sorry...`
        }
        this.budgetMoney += mealPrice
        return `Your order (${mealName}) will be completed in the next 30 minutes and will cost you ${mealPrice}.`
    }
}
