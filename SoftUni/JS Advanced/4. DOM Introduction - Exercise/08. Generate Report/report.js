function generateReport() {
    const thElements = document.querySelectorAll('th')
    const trInTbodyElements = document.querySelectorAll('tbody tr')
    const outputElement = document.getElementById('output')
    const infoThElements = []
    const result = []
    Array.from(thElements).forEach((th) => {
        if (th.children[0].checked) {
            infoThElements.push(th.textContent.toLowerCase().trim())
        } else {
            infoThElements.push(false)
        }
    })
    Array.from(trInTbodyElements).forEach((trEl) => {
        const rowObj = {}
        Array.from(trEl.children).forEach((el, i) => {
            if (infoThElements[i]) {
                const currCell = infoThElements[i]
                rowObj[currCell] = el.textContent
            }
        })
        result.push(rowObj)
    })
    outputElement.textContent = JSON.stringify(result)
}
