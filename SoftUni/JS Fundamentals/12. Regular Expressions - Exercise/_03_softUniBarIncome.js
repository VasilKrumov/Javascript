/* eslint-disable no-useless-escape */
function softUniBarIncome(input) {
    const regex = /%(?<name>[A-Z][a-z]+)%(?:.+)?\<(?<product>\w+)\>(?:.+)?\|(?<count>\d+)\|(?:[^0-9]+)?(?<price>\d+(\.\d+)?)\$/
    let sum = 0

    for (const line of input) {
        const match = regex.exec(line)
        if (match) {
            const totalPrice = Number(match.groups.price) * Number(match.groups.count)
            sum += totalPrice
            console.log(`${match.groups.name}: ${match.groups.product} - ${totalPrice.toFixed(2)}`)
        }
    }

    console.log(`Total income: ${sum.toFixed(2)}`)
}

softUniBarIncome(['%George%<Croissant>|2|10.3$', '%Peter%<Gum>|1|1.3$', '%Maria%<Cola>|1|2.4$', 'end of shift'])
