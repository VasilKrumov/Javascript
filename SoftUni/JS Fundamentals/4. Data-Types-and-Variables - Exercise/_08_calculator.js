function calculator(firstNumber, operation, secondNumber) {
    switch (operation) {
        case '+':
            console.log((firstNumber + secondNumber).toFixed(2))
            break
        case '-':
            console.log((firstNumber - secondNumber).toFixed(2))
            break
        case '*':
            console.log((firstNumber * secondNumber).toFixed(2))
            break
        case '/':
            console.log((firstNumber / secondNumber).toFixed(2))
            break
        case '%':
            console.log((firstNumber % secondNumber).toFixed(2))
            break

        default:
            break
    }
}
calculator(5, '+', 10)
