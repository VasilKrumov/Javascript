function addAndSubtract(array) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    const modifiedArray = [...array]
    const originalSum = array.reduce(reducer)
    for (let index = 0; index < modifiedArray.length; index++) {
        if (modifiedArray[index] % 2 === 0) {
            modifiedArray[index] += index
        } else {
            modifiedArray[index] -= index
        }
    }
    const modifiedSum = modifiedArray.reduce(reducer)
    array.reduce(reducer)
    console.log(modifiedArray)
    console.log(originalSum)
    console.log(modifiedSum)
}

addAndSubtract([5, 15, 23, 56, 35])
