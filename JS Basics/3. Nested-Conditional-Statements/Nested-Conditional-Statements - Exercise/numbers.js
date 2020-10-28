function numbers(n1, n2, operator) {
    n1 = Number(n1)
    n2 = Number(n2)
    let result

    switch (operator) {
        case '+':
        case '-':
        case '*':
            if (operator === '+') {
                result = n1 + n2
            } else if (operator === '-') {
                result = n1 - n2
            } else {
                result = n1 * n2
            }
            let type
            if (result % 2 === 0) {
                type = 'even'
            } else {
                type = 'odd'
            }
            console.log(`${n1} ${operator} ${n2} = ${result} - ${type}`)
            break
        case '/':
            if (n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`)
            } else {
                result = n1 / n2
                console.log(`${n1} / ${n2} = ${result.toFixed(2)}`)
            }
            break
        case '%':
            if (n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`)
            } else {
                result = n1 % n2
                console.log(`${n1} % ${n2} = ${result}`)
            }
    }
}
