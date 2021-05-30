function fromJSONToHTMLTable(json = '') {
    const entities = { '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }
    const escapeHTML = (str) => str.replace(/[&<>'"]/g, (tag) => entities[tag])

    const getHeadRow = (array) =>
        `\n   <tr>${Object.keys(array[0])
            .map((val) => `<th>${val}</th>`)
            .join('')}</tr>`
    const getRows = (array) =>
        array
            .map(
                (el) =>
                    `\n   <tr>${Object.values(el)
                        .map((val) => `<td>${escapeHTML(val.toString())}</td>`)
                        .join('')}</tr>`
            )
            .join('')

    const data = JSON.parse(json)
    return `<table>${getHeadRow(data)}${getRows(data)}\n</table>`
}
