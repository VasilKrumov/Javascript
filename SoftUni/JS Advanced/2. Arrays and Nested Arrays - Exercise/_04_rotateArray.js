function rotataArray(array, number) {
    for (let i = 1; i <= number; i++) {
        const rotatedEl = array.pop()
        array.unshift(rotatedEl)
    }

    console.log(array.join(' '))
}
