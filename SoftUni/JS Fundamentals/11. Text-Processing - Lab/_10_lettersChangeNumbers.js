/* eslint-disable */
function lettersChangeNumbers(string = '') {
    const alphabetPosition = (letter) => parseInt(letter, 36) - 9

    let sum = 0
    const pattern = /(?<first>[A-Za-z])(?<number>[0-9]+)(?<last>[A-Za-z])/g
    while ((result = pattern.exec(string)) !== null) {
        const { first } = result.groups
        const { last } = result.groups
        let number = Number(result.groups.number)
        const firstAlphabetPosition = alphabetPosition(first)
        const secondAlphabetPosition = alphabetPosition(last)

        if (first === first.toUpperCase()) number /= firstAlphabetPosition
        else number *= firstAlphabetPosition

        if (last === last.toUpperCase()) number -= secondAlphabetPosition
        else number += secondAlphabetPosition

        sum += number
    }

    console.log(sum.toFixed(2))
}
