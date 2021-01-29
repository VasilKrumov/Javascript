function gladiatorExpenses(loses = 1, helmet = 1, sword = 1, shield = 1, armor = 1) {
    let price = 0

    for (let f = 1; f <= loses; f++) {
        const [isSecond, isThird, shouldUpdateArmor] = [f % 2 === 0, f % 3 === 0, f % 12 === 0]

        if (isSecond) price += helmet
        if (isThird) price += sword
        if (isSecond && isThird) price += shield
        if (shouldUpdateArmor) price += armor
    }

    console.log(`Gladiator expenses: ${price.toFixed(2)} aureus`)
}
