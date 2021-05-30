function sortingNumbers(array) {
    const sorted = array.sort((a, b) => a - b)
    const result = []

    for (let i = 0; i < Math.ceil(sorted.length / 2); i++) {
        result.push(sorted[i])
        if ((sorted.length / 2 !== 0 && i !== Math.floor(sorted.length / 2)) || sorted.length / 2 === 0) {
            result.push(sorted[sorted.length - 1 - i])
        }
    }

    return result
}
