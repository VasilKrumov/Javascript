/* eslint-disable */
function partyTime(input = []) {
    const guests = input.slice(0, input.indexOf('PARTY'))
    const comingGuests = input.slice(guests.length + 1)
    const vips = []
    const regular = []
    guests.forEach((g) => {
        ;(isNaN(Number(g[0])) ? regular : vips).push(g)
    })
    // Picha s testovete hrumnalo li mu e, che nqma nachin edin i sushti chovek da doide dva puti na party-to?
    // Da si opravq inputa
    comingGuests.forEach((g) => {
        if ((indexVip = vips.indexOf(g)) !== -1) {
            vips.splice(indexVip, 1)
        }
        if ((indexReg = regular.indexOf(g)) !== -1) {
            regular.splice(indexReg, 1)
        }
    })

    console.log(vips.length + regular.length)
    vips.forEach((g) => console.log(g))
    regular.forEach((g) => console.log(g))
}
