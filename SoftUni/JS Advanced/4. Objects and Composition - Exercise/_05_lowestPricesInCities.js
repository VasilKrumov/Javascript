function lowestPricesInCities(arr) {
    const products = {}

    arr.forEach((line) => {
        const [town, product, prise] = line.split(' | ')
        if (products[product]) {
            products[product][town] = Number(prise)
        } else {
            products[product] = {}
            products[product][town] = Number(prise)
        }
    })

    Object.keys(products).forEach((product) => {
        const sortedPrises = Object.keys(products[product]).sort((townA, townB) => {
            const priseA = products[product][townA]
            const priseB = products[product][townB]
            if (priseA - priseB > 0) {
                return 1
            }
            if (priseA - priseB < 0) {
                return -1
            }
            return 0
        })
        console.log(`${product} -> ${products[product][sortedPrises[0]]} (${sortedPrises[0]})`)
    })
}
