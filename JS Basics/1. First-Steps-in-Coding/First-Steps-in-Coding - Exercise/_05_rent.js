function rent(rent) {
    rent = Number(rent)

    let cakePrice = rent * 0.2
    let drinksPrice = cakePrice - cakePrice * 0.45
    let animatorPrice = (rent * 1) / 3

    let totalPrice = rent + cakePrice + drinksPrice + animatorPrice
    console.log(totalPrice)
}
