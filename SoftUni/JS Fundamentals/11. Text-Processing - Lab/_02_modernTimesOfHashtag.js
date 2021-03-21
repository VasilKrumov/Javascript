function modernTimesOfHashtag(str) {
    const words = str.split(' ')

    function isOnlyLetters(word) {
        let isLetter = true
        for (const char of word) {
            const code = char.charCodeAt()
            if (code < 65 || (code > 90 && code < 97) || code > 122) {
                isLetter = false
                break
            }
        }
        return isLetter
    }

    for (const word of words) {
        if (word.startsWith('#') && isOnlyLetters(word.substring(1)) && word.substring(1) !== '') {
            console.log(word.substring(1))
        }
    }
}
