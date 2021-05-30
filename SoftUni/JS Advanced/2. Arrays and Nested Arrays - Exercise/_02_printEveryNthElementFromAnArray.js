function printEveryNthElementFromAnArray(array, number) {
    // eslint-disable-next-line array-callback-return
    const result = array.filter((el, i) => {
        if (i % number === 0) {
            return el
        }
    })

    return result
}
