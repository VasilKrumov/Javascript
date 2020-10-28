function multiplicationTable(multiplier) {
    number = Number(multiplier)
    for (let i = 1; i <= 10; i++) {
        let product = i * multiplier
        console.log(`${i} * ${multiplier} = ${product}`)
    }
}
