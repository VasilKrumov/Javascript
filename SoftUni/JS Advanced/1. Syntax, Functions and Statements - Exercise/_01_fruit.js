function fruit(fruit, grams, pricePerKg) {
    const weightInKg = grams / 1000
    const money = weightInKg * pricePerKg
    console.log(`I need $${money.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`)
}
