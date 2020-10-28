function multipliersEndingInSeven(number) {
    for (let index = 1; index <= 1000; index++) {
        if (index % 10 === 7) {
            console.log(index)
        }
    }
}

function multiplicationTable(multiplier) {
    number = Number(multiplier)
    for (let i = 1; i <= 10; i++) {
        let product = i * multiplier
        console.log(`${i} * ${multiplier} = ${product}`)
    }
}

function leapYear(startYear, endYear) {
    startYear = Number(startYear)
    endYear = Number(endYear)

    for (let year = startYear; year <= endYear; year += 4) {
        console.log(year)
    }
}

function factorial(num) {
    num = Number(num)
    let factorial = 1

    for (let multiplier = 2; multiplier <= num; multiplier++) {
        factorial *= multiplier
    }
    console.log(factorial)
}

function wordsInSentance(text) {
    let words = 0

    for (let index = 0; index < text.length; index++) {
        let current = text[index]

        if (current === ' ') {
            words++
        }
    }

    words++

    if (words > 10) {
        console.log(`The message is too long to be send! Has ${words} words.
        `)
    } else {
        console.log('The message was send successfully!')
    }
}

function histogram(input) {
    let n = Number(input[0])
    let p1 = 0
    let p2 = 0
    let p3 = 0
    let p4 = 0
    let p5 = 0

    for (let i = 1; i < input.length; i++) {
        let current = Number(input[i])
        if (current < 200) {
            p1++
        } else if (current < 400) {
            p2++
        } else if (current < 600) {
            p3++
        } else if (current < 800) {
            p4++
        } else {
            p5++
        }
    }

    console.log(`${((p1 / n) * 100).toFixed(2)}%`)
    console.log(`${((p2 / n) * 100).toFixed(2)}%`)
    console.log(`${((p3 / n) * 100).toFixed(2)}%`)
    console.log(`${((p4 / n) * 100).toFixed(2)}%`)
    console.log(`${((p5 / n) * 100).toFixed(2)}%`)
}

function divisionWithoutLeftover(input) {
    let n = Number(input[0])
    let p1 = 0
    let p2 = 0
    let p3 = 0

    for (let i = 1; i < input.length; i++) {
        if (current % 2 === 0) {
            p1++
        }
        if (current % 3 === 0) {
            p2++
        }
        if (current % 4 === 0) {
            p3++
        }
    }

    console.log(`${((p1 / n) * 100).toFixed(2)}%`)
    console.log(`${((p2 / n) * 100).toFixed(2)}%`)
    console.log(`${((p3 / n) * 100).toFixed(2)}%`)
}

function salary(input) {
    let tabs = Number(input[0])
    let salary = Number(input[1])

    for (let index = 2; index < input.length; index++) {
        let currentTab = input[index]
        if (currentTab === 'Facebook') {
            salary -= 150
        } else if (currentTab === 'Instagram') {
            salary -= 100
        } else if (currentTab === 'Reddit') {
            salary -= 50
        }
    }

    if (salary <= 0) {
        console.log('You have lost your salary.')
    } else {
        console.log(salary)
    }
}

function minNumber(input) {
    let numberOfNumbers = Number(input[0])
    let lowestNumber

    for (let index = 1; index < input.length; index++) {
        let currentNumber = Number(input[index])
        lowestNumber = currentNumber

        if (lowestNumber > currentNumber) {
            lowestNumber = currentNumber
        }
    }
    console.log(lowestNumber)
}

minNumber(['4', '45', '-20', '7', '99'])
