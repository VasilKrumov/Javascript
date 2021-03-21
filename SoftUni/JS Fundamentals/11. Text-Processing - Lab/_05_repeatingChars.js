function repeatingChars(str) {
    let result = ''
    for (const char of str) {
        if (char !== result[result.length - 1]) {
            result += char
        }
    }
    console.log(result)
}
