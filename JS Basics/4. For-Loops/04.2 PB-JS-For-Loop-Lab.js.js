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
