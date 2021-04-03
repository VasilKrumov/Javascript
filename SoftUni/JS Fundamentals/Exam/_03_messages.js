/* eslint-disable no-prototype-builtins */
/* eslint-disable no-case-declarations */
function messages(input) {
    const capacity = Number(input.shift())
    let list = {}

    for (const line of input) {
        const [command, firstArg, secondArg, thirdArg] = line.split('=')
        if (command === 'Statistics') {
            break
        }

        switch (command) {
            case 'Add':
                if (!list.hasOwnProperty(firstArg)) {
                    list[firstArg] = {
                        sent: Number(secondArg),
                        received: Number(thirdArg),
                    }
                }
                break
            case 'Message':
                const sender = firstArg
                const receiver = secondArg

                if (list.hasOwnProperty(sender) && list.hasOwnProperty(receiver)) {
                    list[sender].sent += 1
                    list[receiver].received += 1

                    if (list[sender].sent + list[sender].received >= capacity) {
                        console.log(`${sender} reached the capacity!`)
                        delete list[sender]
                    }
                    if (list[receiver].received + list[receiver].sent >= capacity) {
                        console.log(`${receiver} reached the capacity!`)
                        delete list[receiver]
                    }
                }
                break
            case 'Empty':
                const username = firstArg
                if (username !== 'All') {
                    if (list.hasOwnProperty(username)) {
                        delete list[username]
                    }
                } else {
                    list = {}
                }
                break
            default:
                break
        }
    }
    const count = Object.keys(list).length
    console.log(`Users count: ${count}`)
    const array = Object.entries(list).sort((a, b) => b[1].received - a[1].received || a[0].localeCompare(b[0]))

    array.forEach((element) => {
        console.log(`${element[0]} - ${element[1].sent + element[1].received}`)
    })
}
