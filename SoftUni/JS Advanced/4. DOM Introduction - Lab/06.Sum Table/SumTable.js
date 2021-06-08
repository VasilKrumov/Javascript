function sumTable() {
    const tableDataCollectionElements = Array.from(document.querySelectorAll('tr td:last-child'))
    const sumBox = document.getElementById('sum')
    const result = tableDataCollectionElements.reduce((acc, el) => {
        const value = Number(el.textContent)
        return acc + value
    }, 0)

    sumBox.textContent = result
}
