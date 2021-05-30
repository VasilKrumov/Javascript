function extractIncreasingSubsequenceFromArray(array) {
    let maxNum = Number.MIN_SAFE_INTEGER
    const filteredArray = array.reduce((ac, el) => {
        if (el >= maxNum) {
            ac.push(el)
            maxNum = el
        }
        return ac
    }, [])

    return filteredArray
}
