function extractText() {
    const listItems = document.querySelectorAll('#items li')
    let result = ''
    for (const listItem of listItems) {
        result += `${listItem.textContent.trim()}\n`
    }
    const resultElement = document.getElementById('result')
    resultElement.textContent = result
}
