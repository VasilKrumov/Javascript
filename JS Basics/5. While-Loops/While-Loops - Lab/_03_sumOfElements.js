function readArray(arr) {
    let index = 0

    while (true) {
        if (arr[index] === 'Stop') {
            break
        } else {
            console.log(arr[index])
            index++
        }
    }
}