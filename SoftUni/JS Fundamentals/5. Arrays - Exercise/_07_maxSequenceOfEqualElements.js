function maxSum(array) {
    let sequence = []
    for (let index = 0; index < array.length; index++) {
        const element = array[index]
        const currentSequence = [element]

        for (let j = index + 1; j < array.length; j++) {
            if (element === array[j]) {
                currentSequence.push(element)
            } else {
                break
            }
        }
        if (sequence.length < currentSequence.length) {
            sequence = currentSequence
        }
    }
    console.log(sequence.join(' '))
}

maxSum([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
