function biggerHalf(input) {
    const sorted = input.sort((a, b) => a - b)
    const resultLength = Math.ceil(sorted.length / 2)
    const result = sorted.slice(sorted.length - resultLength)

    return result
}
