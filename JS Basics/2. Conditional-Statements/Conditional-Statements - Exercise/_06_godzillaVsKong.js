function godzillaVsKong(budget, extras, priceForExtra) {
    budget = Number(budget)
    extras = Number(extras)
    priceForExtra = Number(priceForExtra)

    let decorPrice = budget * 0.1
    let clothingPrice = extras * priceForExtra

    if (extras > 150) {
        clothingPrice = clothingPrice - clothingPrice * 0.1
    }

    let total = decorPrice + clothingPrice

    if (total > budget) {
        let needed = total - budget
        console.log('Not enough money!')
        console.log(`Wingard needs ${needed.toFixed(2)} leva more.`)
    } else {
        let left = budget - total
        console.log('Action!')
        console.log(`Wingard starts filming with ${left.toFixed(2)} leva left.`)
    }
}
