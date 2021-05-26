function processOddPositions(arr) {
    const filteredArr = arr
        .filter((el, i) => i % 2 !== 0)
        .map((el) => el * 2)
        .reverse()

    console.log(filteredArr.join(' '))
}
