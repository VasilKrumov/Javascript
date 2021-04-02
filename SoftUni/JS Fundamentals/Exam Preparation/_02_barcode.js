function barcode(input) {
    input.shift()
    const regex = /(@#+)([A-Z][A-Za-z\d]{4,}[A-Z])(@#+)/
    // const secondRegex = new RegExp('(@#+)([A-Z][A-Za-z\d]{4,}[A-Z])(@#+)', 'g')
    input.forEach((line) => {
        if (regex.test(line)) {
            const tokens = regex.exec(line)
            const barcode = tokens[2]
            const numbers = [...barcode].filter((symbol) => /\d/.test(symbol)).join('')
            const productGroup = numbers === '' ? '00' : numbers
            console.log(`Product group: ${productGroup}`)
        } else {
            console.log(`Invalid barcode`)
        }
    })
}

// barcode([ '3', '@#FreshFisH@#', '@###Brea0D@###', '@##Che46sE@##' ])
