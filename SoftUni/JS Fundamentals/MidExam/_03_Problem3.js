function chatBot(array) {
    let finalLog = []
    for (const item of array) {
        const cool = item.split(' ')
        const [command, ...message] = cool

        if (command === 'end') {
            break
        } else if (command === 'Chat') {
            finalLog.push(message[0])
        } else if (command === 'Delete') {
            if (finalLog.includes(message[0])) {
                finalLog.splice(finalLog.indexOf(message[0]), 1)
            }
        } else if (command === 'Edit') {
            if (finalLog.includes(message[0])) {
                const editedMessage = finalLog.indexOf(message[0])
                // eslint-disable-next-line prefer-destructuring
                finalLog[editedMessage] = message[1]
            }
        } else if (command === 'Pin') {
            if (finalLog.includes(message[0])) {
                finalLog.splice(finalLog.indexOf(message[0]), 1)
                finalLog.push(message[0])
            }
        } else if (command === 'Spam') {
            finalLog = [...finalLog, ...message]
        }
    }
    console.log(finalLog.join('\n'))
}

chatBot(['Chat John', "Spam Let's go to the zoo", 'Edit zoo cinema', 'Chat tonight', 'Pin John', 'end'])
