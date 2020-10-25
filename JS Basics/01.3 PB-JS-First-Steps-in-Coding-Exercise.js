function convertor(input) {
    const inputNumber = Number(input)
    const usdCoarse = 1.79549
    const levaValue = inputNumber * usdCoarse
    console.log(levaValue)
}

function radiansToDegrees(input) {
    let radians = Number(input)
    let degrees = radians * 180 / Math.PI
    console.log(degrees.toFixed(0))
}

function calculateDeposit(depositedSum, depositedTime, annualPercent) {
    const sum = Number(depositedSum)
    const time = Number(depositedTime)
    const percentageIncrease = Number(annualPercent) / 100

    const totalIncrease = sum * percentageIncrease
    const monthlyIncrease = totalIncrease / 12

    const endResult = sum + (time * monthlyIncrease)

    console.log(endResult)
}

function literature(pages, hourPages, days) {
    const nPages = Number(pages)
    const nHourPages = Number(hourPages)
    const nDays = Number(days)

    const totalTimeToBook = nPages / nHourPages
    const totalDaysToBook = totalTimeToBook / nDays

    console.log(totalDaysToBook)
}

literature("212", "20","2")

function solve(rent) {
    rent = Number(rent)

    let cakePrice = rent * 0.2
    let drinksPrice = cakePrice - (cakePrice) * 0.45
    let animatorPrice = rent * 1/3

    let totalPrice = rent + cakePrice + drinksPrice + animatorPrice
    console.log(totalPrice)
}