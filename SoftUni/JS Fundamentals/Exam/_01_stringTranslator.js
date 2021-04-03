function stringTranslator(input) {
    let testString = input.shift()

    input.forEach((line) => {
        if (line !== 'End') {
            const [command, ...tokens] = line.split(' ')
            if (command === 'Translate') {
                const [substring, substitute] = tokens
                if (testString.includes(substring)) {
                    testString = testString.replace(new RegExp(`${substring}`, 'g'), substitute)
                    console.log(testString)
                } else {
                    console.log(`Nothing to replace!`)
                }
            } else if (command === 'Includes') {
                if (testString.includes(tokens)) {
                    console.log('True')
                } else {
                    console.log('False')
                }
            } else if (command === 'Start') {
                if (testString.startsWith(tokens)) {
                    console.log('True')
                } else {
                    console.log('False')
                }
            } else if (command === 'Lowercase') {
                const lowerString = testString
                    .split(' ')
                    .map((item) => item.toLowerCase())
                    .join(' ')
                console.log(lowerString)
            } else if (command === 'FindIndex') {
                const searchedIndex = tokens[0]
                const lowerString = testString
                    .split(' ')
                    .map((item) => item.toLowerCase())
                    .join(' ')
                const lastIndex = lowerString.lastIndexOf(searchedIndex)
                console.log(lastIndex)
            } else if (command === 'Remove') {
                const [startIndex, count] = tokens
                const initialArray = [...testString]
                const newArray = initialArray.splice(startIndex, count)
                console.log(initialArray.map((item) => item.toLowerCase()).join(''))
            }
        }
    })
}

stringTranslator([
    '//Thi5 I5 MY 5trING!//',
    'Translate 5 s',
    'Includes string',
    'Start //This',
    'Lowercase',
    'FindIndex i',
    'Remove 0 10',
    'End',
])
