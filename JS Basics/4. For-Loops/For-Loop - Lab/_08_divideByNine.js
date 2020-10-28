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
