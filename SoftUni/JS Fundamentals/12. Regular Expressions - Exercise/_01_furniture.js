function furniture(input) {
    let result = 'Bought furniture:'
    let sum = 0
    for (const line of input) {
        const regex = />>(?<name>[A-Za-z]+)<<(?<price>[\d]+(\.[\d]+)?)!(?<count>[\d]+)/g

        const match = regex.exec(line)

        if (match) {
            result += `\n${match.groups.name}`
            sum += Number(match.groups.price) * Number(match.groups.count)
        }
    }

    result += `\nTotal money spend: ${sum.toFixed(2)}`

    console.log(result)
}
