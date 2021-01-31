function equalSums(array) {
    let isEqual = false
    for (let i = 0; i < array.length; i++) {
        let leftSum = 0
        let rightSum = 0
        for (let j = i + 1; j < array.length; j++) {
            rightSum += array[j]
        }
        for (let k = 0; k < i; k++) {
            leftSum += array[k]
        }
        if (leftSum === rightSum) {
            isEqual = true
            console.log(i)
        }
    }
    if (!isEqual) {
        console.log('no')
    }
}

equalSums([1, 2, 3, 3])
