function evenToThePowerOfTwo(num) {
    num = Number(num)
    for (let index = 0; index <= num; index += 2) {
        console.log(Math.pow(2, index))
    }
}
