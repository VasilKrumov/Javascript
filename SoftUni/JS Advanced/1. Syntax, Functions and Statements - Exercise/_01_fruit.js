function fruit(fruit, grams, pricePerKg) {
    const weightInKg = grams / 1000
    const money = weightInKg * pricePerKg
    console.log(`I need $${money} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`)
}

fruit('orange', 2500, 1.8)
