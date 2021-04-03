/* eslint-disable no-useless-escape */
function encrypt(input) {
    input.shift()
    const regex = /\!(?<command>[A-Z][a-z]{2,})\!:(\[(?<message>[A-Za-z]{8,})\])/
    const asciiArray = []

    input.forEach((line) => {
        if (regex.test(line)) {
            const tokens = regex.exec(line)
            const { message } = tokens.groups
            for (let i = 0; i < message.length; i++) {
                asciiArray.push(message.charCodeAt(i))
            }
            console.log(`${tokens.groups.command}: ${asciiArray.join(' ')}`)
        } else {
            console.log(`The message is invalid`)
        }
    })
}

encrypt(['2', '!Send!:[IvanisHere]', '*Time@:[Itis5amAlready]'])
