function aggregateElements(array = []) {
    const sum = (array = []) => array.reduce((a, b) => a + b, 0)

    const sumInverse = (array = []) => array.reduce((a, b) => a + 1 / b, 0)

    const concatArray = (array = []) => array.join('')

    const aggregate = (array = [], callback) => callback(array)

    console.log(aggregate(array, sum))
    console.log(aggregate(array, sumInverse))
    console.log(aggregate(array, concatArray))
}
