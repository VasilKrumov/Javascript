function charactersInRange(a, b) {
    const first = a.charCodeAt()
    const second = b.charCodeAt()

    function charsInline(x, y) {
        let line = ''
        for (let i = x + 1; i < y; i++) {
            line += `${String.fromCharCode(i)} `
        }
        return line
    }

    console.log(first > second ? charsInline(second, first) : charsInline(first, second))
}

charactersInRange('a', 'd')
