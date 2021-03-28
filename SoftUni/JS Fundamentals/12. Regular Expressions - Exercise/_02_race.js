/* eslint-disable no-prototype-builtins */
function race(input) {
    const racers = {}
    input
        .shift()
        .split(', ')
        .forEach((name) => {
            racers[name] = 0
        })

    for (const line of input) {
        const regexAZ = /[A-Za-z]/g
        const regexD = /[\d]/g

        const name = line.match(regexAZ).join('')

        if (racers.hasOwnProperty(name)) {
            const km = line
                .match(regexD)
                .map(Number)
                .reduce((a, b) => a + b, 0)
            racers[name] += km
        }
    }

    const sorted = Object.keys(racers).sort((a, b) => racers[b] - racers[a])

    console.log(`1st place: ${sorted[0]}
2nd place: ${sorted[1]}
3rd place: ${sorted[2]}
`)
}

race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race',
])
