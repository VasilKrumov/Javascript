function objectFactory(library, orders) {
    const result = []
    for (let i = 0; i < orders.length; i++) {
        const obj = orders[i].template
        orders[i].parts.forEach((part) => {
            obj[part] = library[part]
        })
        result.push(obj)
    }
    return result
}

const library = {
    print() {
        console.log(`${this.name} is printing a page`)
    },
    scan() {
        console.log(`${this.name} is scanning a document`)
    },
    play(artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`)
    },
}

const orders = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print'],
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan'],
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print'],
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play'],
    },
]

console.log(objectFactory(library, orders))
