function solve() {
    const inputStr = document.getElementById('input').value
    const output = document.getElementById('output')

    const input = inputStr.split('.').filter((p) => p.length > 0)

    for (let i = 0; i < input.length; i += 3) {
        const arr = []
        for (let y = 0; y < 3; y++) {
            if (input[i + y]) {
                arr.push(input[i + y])
            }
        }
        const paragraph = `${arr.join('. ')}.`
        output.innerHTML += `<p>${paragraph}</p>`
    }
}
