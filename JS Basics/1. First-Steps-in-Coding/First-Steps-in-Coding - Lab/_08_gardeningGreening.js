function gardeningGreening(squareMeters) {
    const greeningPrice = 7.61
    const discount = 0.18
    const totalCost = squareMeters * greeningPrice
    const totalDiscount = totalCost * discount
    const finalPrice = totalCost - totalDiscount
    console.log(`The final price is ${finalPrice} lv.`)
    console.log(`The discount is ${totalDiscount} lv.`)
}
