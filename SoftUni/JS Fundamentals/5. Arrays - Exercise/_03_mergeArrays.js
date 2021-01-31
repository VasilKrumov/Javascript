function mergeArrays(firstArray, secondArray) {
    const thirdArray = []
    for (let index = 0; index < firstArray.length; index++) {
        if (index % 2 === 0) {
            const sum = Number(firstArray[index]) + Number(secondArray[index])
            thirdArray.push(sum)
        } else {
            const concat = firstArray[index] + secondArray[index]
            thirdArray.push(concat)
        }
    }
    console.log(thirdArray.join(' - '))
}

mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11'])
