function excellent(grade) {
    if (grade >= 5.5) {
        console.log('Excellent!')
    }
}

function greaterNumber(num1, num2) {
    num1 = Number(num1)
    num2 = Number(num2)
    if (num1 > num2) {
        console.log(num1)
    } else {
        console.log(num2)
    }
}

function evenOrOdd(num) {
    if (Number(num) % 2 == 0) {
        console.log('even')
    } else {
        console.log('odd')
    }
}

function numbers100and200(num) {
    if (num < 100) {
        console.log('Less than 100')
    } else if (num <= 200) {
        console.log('Between 100 and 200')
    } else {
        console.log('Greater than 200')
    }
}

function passwordGuess(password) {
    if (password === 's3cr3t!P@ssw0rd') {
        console.log('Welcome')
    } else {
        console.log('Wrong password!')
    }
}

function findArea(figureType, firstNum, secondNum) {
    let result

    if (figureType === 'square') {
        result = firstNum * firstNum
    } else if (figureType === 'rectangle') {
        result = firstNum * secondNum
    } else if (figureType === 'circle') {
        result = Math.pow(firstNum, 2) * Math.PI
    } else if (figureType === 'triangle') {
        result = (firstNum * secondNum) / 2
    }
    console.log(result.toFixed(3))
}

function totalWinnings(tripPrice, jigsaw, dolls, bears, minions, trucks) {
    let jigsawPrice = 2.6
    let dollsPrices = 3
    let bearPrice = 4.1
    let minionPrice = 8.2
    let trucksPrice = 2

    let totalCount =
        Number(jigsaw) +
        Number(dolls) +
        Number(bears) +
        Number(minions) +
        Number(trucks)
    let priceMultiplier = 1

    if (totalCount >= 50) {
        priceMultiplier = 0.75
    }

    let total =
        jigsaw * Number(jigsawPrice) +
        dolls * Number(dollsPrices) +
        bears * Number(bearPrice) +
        minions * Number(minionPrice) +
        trucks * Number(trucksPrice)

    total = total * priceMultiplier

    let finalMoney = total - total * 0.1

    tripPrice = Number(tripPrice)

    if (finalMoney >= tripPrice) {
        console.log(`Yes! ${(finalMoney - tripPrice).toFixed(2)} lv left.`)
    } else {
        console.log(
            `Not enough money! ${(tripPrice - finalMoney).toFixed(
                2
            )} lv needed.`
        )
    }
}
