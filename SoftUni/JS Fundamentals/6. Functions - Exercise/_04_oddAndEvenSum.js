function oddAndEvenSum(num = 1) {
    const numStr = num.toString()
    let oddSum = 0
    let evenSum = 0

    for (let i = 0; i < numStr.length; i++) {
        const n = Number(numStr[i])
        if (n % 2 === 0) {
            evenSum += n
        } else {
            oddSum += n
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

oddAndEvenSum(1000435)
