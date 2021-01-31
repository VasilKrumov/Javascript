function arrayRotations(array, n) {
    for (let index = 0; index < n; index++) {
        const element = array.shift()
        array.push(element)
    }
    console.log(array.join(' '))
}

arrayRotations([51, 47, 32, 61, 21], 2)
