function order(array) {
    const numberOfOrders = array.shift()
    let pricePerCapsule
    let days
    let capsulesCount
    let coffeePrice = 0
    let total = 0

    for (let i = 1; i <= numberOfOrders; i++) {
        pricePerCapsule = array.shift()
        days = array.shift()
        capsulesCount = array.shift()
        coffeePrice = 0
        coffeePrice = days * capsulesCount * pricePerCapsule
        total += coffeePrice
        console.log(`The price for the coffee is: $${coffeePrice.toFixed(2)}`)
    }
    console.log(`Total: $${total.toFixed(2)}`)
}

order([2, 4.99, 31, 3, 0.35, 31, 5])
