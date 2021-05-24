/* eslint-disable no-eval */
function mathOperations(num1 = 1, num2 = 1, operator = '') {
    console.log(eval(`${num1}${operator}${num2}`))
}
