const testNumbers = {
    sumNumbers(num1, num2) {
        let sum = 0

        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            return undefined
        }
        sum = (num1 + num2).toFixed(2)
        return sum
    },
    numberChecker(input) {
        input = Number(input)

        if (isNaN(input)) {
            throw new Error('The input is not a number!')
        }

        if (input % 2 === 0) {
            return 'The number is even!'
        }
        return 'The number is odd!'
    },
    averageSumArray(arr) {
        let arraySum = 0

        for (let i = 0; i < arr.length; i++) {
            arraySum += arr[i]
        }

        return arraySum / arr.length
    },
}

module.exports = testNumbers
