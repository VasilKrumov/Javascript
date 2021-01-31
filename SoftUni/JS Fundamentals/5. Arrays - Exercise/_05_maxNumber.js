function maxNumber(array) {
    const topNumbers = []
    for (let i = 0; i < array.length; i++) {
        let isTop = true
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] <= array[j]) {
                isTop = false
                break
            }
        }
        if (isTop) {
            topNumbers.push(array[i])
        }
    }
    console.log(topNumbers.join(' '))
}

maxNumber([1, 4, 3, 2])
