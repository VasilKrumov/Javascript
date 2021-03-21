function pascalCase(str) {
    const result = []
    let upperIndex = 0

    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            const word = str.substring(upperIndex, i)
            result.push(word)
            upperIndex = i
        }
    }
    result.push(str.substring(upperIndex))
    console.log(result.join(', '))
}
