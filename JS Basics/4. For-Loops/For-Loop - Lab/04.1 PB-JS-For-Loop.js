function numbers1to100() {
    for (let index = 1; index <= 100; index++) {
        console.log(index)
    }
}

function reversNumbers(number) {
    number = Number(number)
    for (let index = number; index > 0; index--) {
        console.log(index)
    }
}

function skipThreeNumbers(number) {
    number = Number(number)
    for (let index = 1; index <= number; index += 3) {
        console.log(index)
    }
}

function evenToThePowerOfTwo(num) {
    num = Number(num)
    for (let index = 0; index <= num; index += 2) {
        console.log(Math.pow(2, index))
    }
}

function twoToThePowerOfTwo(n) {
    n = Number(n)

    for (let i = 0; i <= n; i = +2) {
        console.log(Math.pow(2, i))
    }
}

function stringToText(text) {
    for (let index = 0; index < text.length; index++) {
        console.log(text[index])
    }
}

function sumOfVowels(str) {
    let sum = 0
    for (let i = 0; i < str.length; i++) {
        switch (str.charAt(i)) {
            case 'a':
                sum += 1
                break
            case 'e':
                sum += 2
                break
            case 'i':
                sum += 3
                break
            case 'o':
                sum += 4
                break
            case 'u':
                sum += 5
                break
        }
    }
    console.log(sum)
}

function sumOfDigits(num) {
    let sum = 0
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i])
    }
    console.log(`The sum of the digits is:${sum}`)
}

function divideByNine(n, m) {
    n = Number(n)
    m = Number(m)

    let sum = 0
    let numberString = ''

    for (let i = n; i <= m; i++) {
        if (i % 9 === 0) {
            sum += i
            numberString = numberString + i + '\n'
        }
    }

    console.log('The sum: ' + sum)
    console.log(numberString)
}

function smartLily(age, washerPrice, toyPrice) {
    age = Number(age)
    washerPrice = Number(washerPrice)
    toyPrice = Number(toyPrice)

    let sum = 0
    let toyCount = 0
    let moneyCount = 0
    let moneyPerBd = 10

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            moneyCount += moneyPerBd
            moneyCount = moneyCount - 1
            moneyPerBd += 10
        } else {
            toyCount++
        }
    }

    sum = toyCount * toyPrice + moneyCount

    if (sum >= washerPrice) {
        console.log(`Yes! ${(sum - washerPrice).toFixed(2)}`)
    } else {
        console.log(`No! ${(washerPrice - sum).toFixed(2)}`)
    }
}
