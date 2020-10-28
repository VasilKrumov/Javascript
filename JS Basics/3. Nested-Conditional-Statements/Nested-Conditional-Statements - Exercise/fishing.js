function fishing(budget, season, fishers) {
    budget = Number(budget)
    fishers = Number(fishers)

    let rent
    switch (season) {
        case 'Spring':
            rent = 3000
            break
        case 'Summer':
        case 'Autumn':
            rent = 4200
            break
        case 'Winter':
            rent = 2600
            break
    }

    if (fishers <= 6) {
        rent = rent * 0.9
    } else if (fishers >= 7 && fishers <= 11) {
        rent = rent * 0.85
    } else {
        rent = rent * 0.75
    }

    if (fishers % 2 === 0 && season !== 'Autumn') {
        rent = rent * 0.95
    }

    let money = Math.abs(budget - rent).toFixed(2)

    if (budget >= rent) {
        console.log(`Yes! You have ${money} leva left.`)
    } else {
        console.log(`Not enough money! You need ${money} leva.`)
    }
}
