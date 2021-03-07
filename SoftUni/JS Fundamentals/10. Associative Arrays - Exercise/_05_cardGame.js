function cardGame(arr = []) {
    const CARDS = { J: 11, Q: 12, K: 13, A: 14 }
    const TYPES = { S: 4, H: 3, D: 2, C: 1 }
    const decks = {}

    arr.forEach((el) => {
        let [name, cards] = el.split(': ')
        cards = cards.split(', ')
        decks[name] = (decks[name] || []).concat(cards)
    })

    Object.entries(decks).forEach(([name, cards]) => {
        let POINTS = 0
        new Set(cards).forEach((e) => {
            const card = e.substr(0, e.length - 1)
            const type = e[e.length - 1]
            const cardPower = isNaN(card) ? CARDS[card] : Number(card)
            const points = cardPower * TYPES[type]
            POINTS += points
        })

        console.log(`${name}: ${POINTS}`)
    })
}
