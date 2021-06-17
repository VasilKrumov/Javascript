// eslint-disable-next-line no-unused-vars
function printDeckOfCards(cards) {
    const arr = []

    function createCard(f, s) {
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
        const suits = new Map()
        suits.set('S', '\u2660')
        suits.set('H', '\u2665')
        suits.set('D', '\u2666')
        suits.set('C', '\u2663')

        if (!faces.includes(f) || !suits.has(s)) {
            console.log(`Invalid card: ${f + s}`)
        }
        const face = faces.filter((face) => face === f)[0]
        const suit = suits.get(s)

        return {
            face,
            suit,
            toString: () => face + suit,
        }
    }
    cards.forEach((currCard) => {
        const f = currCard.substring(0, currCard.length - 1)
        const s = currCard.substring(currCard.length - 1)
        const card = createCard(f, s)
        arr.push(card)
    })

    console.log(arr.join(' '))
}
