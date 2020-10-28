function volleyball(type, p, h) {
    p = Number(p)
    h = Number(h)

    let sofiaGames = ((48 - h) * 3) / 4
    let homeGames = h
    let holidayGames = p * (2 / 3)
    let isLeap = type === 'leap'
    let totalGames = sofiaGames + homeGames + holidayGames

    if (isLeap) {
        totalGames = totalGames * 1.15
    }
    console.log(Math.floor(totalGames))
}
