function storeCatalogue(arr) {
    const sortedArr = arr.sort((a, b) => a.localeCompare(b))

    let currentLetter = ''
    sortedArr.forEach((line) => {
        const [product, prise] = line.split(' : ')
        const startLetter = product[0]
        if (currentLetter !== startLetter) {
            currentLetter = startLetter
            console.log(currentLetter)
        }

        console.log(`  ${product}: ${Number(prise)}`)
    })
}
