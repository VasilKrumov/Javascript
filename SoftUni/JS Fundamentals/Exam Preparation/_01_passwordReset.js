function passwordReset(input) {
    let password = input.shift()

    input.forEach((line) => {
        if (line !== 'Done') {
            const [command, ...tokens] = line.split(' ')
            if (command === 'TakeOdd') {
                password = [...password].filter((s, i) => i % 2 !== 0).join('')
                console.log(password)
            } else if (command === 'Cut') {
                const index = Number(tokens[0])
                const length = Number(tokens[1])

                const substring = password.substring(index, index + length)
                password = password.replace(substring, '')
                console.log(password)
            } else if (command === 'Substitute') {
                const [substring, substitute] = tokens
                if (password.includes(substring)) {
                    password = password.replace(new RegExp(`${substring}`, 'g'), substitute)
                    console.log(password)
                } else {
                    console.log(`Nothing to replace!`)
                }
            }
        }
    })

    console.log(`Your password is: ${password}`)
}

// passwordReset([
//     'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
//     'TakeOdd',
//     'Cut 15 3',
//     'Substitute :: -',
//     'Substitute | ^',
//     'Done',
// ])
