function sumDigits(input) {
    let sum = 0
    const outputArray = []
    const stringInput = input.toString()
    for (let index = 0; index < stringInput.length; index++) {
        outputArray.push(stringInput.charAt(index))
    }
    for (let index = 0; index < outputArray.length; index++) {
        sum += parseInt(outputArray[index])
    }
    console.log(sum)
}
