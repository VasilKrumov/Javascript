function masterOfArrayPuppets(input) {
    let array = input.shift()
    input.pop()
    for (const line of input) {
        const [command, ...args] = line.split(' ')
        if (command === 'reverse') {
            const startInd = Number(args[1])
            const count = Number(args[3])
            const portionArr = array.splice(startInd, count).reverse()
            array.splice(startInd, 0, portionArr)
            array = array.flat()
        } else if (command === 'sort') {
            const startInd = Number(args[1])
            const count = Number(args[3])
            const portionArr = array.splice(startInd, count).sort()
            array.splice(startInd, 0, portionArr)
            array = array.flat()
        } else if (command === 'remove') {
            const count = Number(args[0])
            array.splice(0, count)
        }
    }
    console.log(array.join(', '))
}

masterOfArrayPuppets([['1', '2', '5', '8', '7', '3', '10', '6', '4', '9'], 'remove 2', 'end'])
