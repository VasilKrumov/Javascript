function cinema(type, rows, columns) {
    rows = Number(rows)
    columns = Number(columns)
    let income = 0

    if (type === 'Premiere') {
        income = rows * columns * 12
    } else if (type === 'Normal') {
        income = rows * columns * 7.5
    } else if (type === 'Discount') {
        income = rows * columns * 5
    }
    console.log(income.toFixed(2))
}

function outfit(degrees, timeOfDay = 'Morning' | 'Afternoon' | 'Evening') {
    degrees = Number(degrees)
    let outfit
    let shoes

    if (degrees >= 10 && degrees <= 18) {
        if (timeOfDay === 'Morning') {
            outfit = 'Sweatshirt'
            shoes = 'Sneakers'
        } else if (timeOfDay === 'Afternoon' || timeOfDay === 'Evening') {
            outfit = 'Shirt'
            shoes = 'Moccasins'
        }
    } else if (degrees > 17 && degrees <= 24) {
        if (timeOfDay === 'Morning') {
            outfit = 'Shirt'
            shoes = 'Moccasins'
        } else if (timeOfDay === 'Afternoon') {
            outfit = 'T-Shirt'
            shoes = 'Sandals'
        } else if (timeOfDay === 'Evening') {
            outfit = 'Shirt'
            shoes = 'Moccasins'
        }
    } else if (degrees >= 25) {
        if (timeOfDay === 'Morning') {
            outfit = 'T-Shirt'
            shoes = 'Sandals'
        } else if (timeOfDay === 'Afternoon') {
            outfit = 'Swim Suit'
            shoes = 'Barefoot'
        } else if (timeOfDay === 'Evening') {
            outfit = 'Shirt'
            shoes = 'Moccasins'
        }
    }
    console.log(`It\'s ${degrees} degrees, get your ${outfit} and ${shoes}.`)
}

function newHome(flower, flowerCount, budget) {
    flowerCount = Number(flowerCount)
    budget = Number(budget)
    let total = 0
    let discount = 1

    if (flower === 'Roses') {
        if (flowerCount > 80) {
            discount = 0.9
        }
        total = flowerCount * 5 * discount
    } else if (flower === 'Dahlias') {
        if (flowerCount > 90) {
            discount = 0.85
        }
        total = flowerCount * 3.8 * discount
    } else if (flower === 'Tulips') {
        if (flowerCount > 80) {
            discount = 0.85
        }
        total = flowerCount * 2.8 * discount
    } else if (flower === 'Narcissus') {
        if (flowerCount < 120) {
            discount = 1.15
        }
        total = flowerCount * 3 * discount
    } else if (flower === 'Gladiolus') {
        if (flowerCount < 80) {
            discount = 1.2
        }
        total = flowerCount * 2.5 * discount
    }

    if (budget >= total) {
        console.log(
            `Hey, you have a great garden with ${flowerCount} ${flower} and ${(
                budget - total
            ).toFixed(2)} leva left.`
        )
    } else {
        console.log(
            `Not enough money, you need ${(total - budget).toFixed(
                2
            )} leva more.`
        )
    }
}

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

function vacation(budget, season) {
    budget = Number(budget)
    let destination = 'Bulgaria' | 'Balkans' | 'Europe'
    let vacationType = 'Hotel' | 'Camp'
    let totalCost = 0

    if (budget <= 100) {
        destination = 'Bulgaria'
        if (season === 'summer') {
            totalCost = budget * 0.3
            vacationType = 'Camp'
        } else if (season === 'winter') {
            totalCost = budget * 0.7
            vacationType = 'Hotel'
        }
    } else if (budget <= 1000) {
        destination = 'Balkans'
        if (season === 'summer') {
            totalCost = budget * 0.4
            vacationType = 'Camp'
        } else if (season === 'winter') {
            totalCost = budget * 0.8
            vacationType = 'Hotel'
        }
    } else if (budget > 1000) {
        destination = 'Europe'
        vacationType = 'Hotel'
        totalCost = budget * 0.9
    }

    console.log(`Somewhere in ${destination}`)
    console.log(`${vacationType} - ${totalCost.toFixed(2)}`)
}

function numbers(n1, n2, operator) {
    n1 = Number(n1)
    n2 = Number(n2)
    let result

    switch (operator) {
        case '+':
        case '-':
        case '*':
            if (operator === '+') {
                result = n1 + n2
            } else if (operator === '-') {
                result = n1 - n2
            } else {
                result = n1 * n2
            }
            let type
            if (result % 2 === 0) {
                type = 'even'
            } else {
                type = 'odd'
            }
            console.log(`${n1} ${operator} ${n2} = ${result} - ${type}`)
            break
        case '/':
            if (n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`)
            } else {
                result = n1 / n2
                console.log(`${n1} / ${n2} = ${result.toFixed(2)}`)
            }
            break
        case '%':
            if (n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`)
            } else {
                result = n1 % n2
                console.log(`${n1} % ${n2} = ${result}`)
            }
    }
}

function hotelRoom(month, nights) {
    nights = Number(nights)

    let studioPrice
    let apartamentPrice

    switch (month) {
        case 'May':
        case 'October':
            studioPrice = 50 * nights
            apartamentPrice = 65 * nights
            if (nights > 14) {
                studioPrice = studioPrice * 0.7
            } else if (nights > 7) {
                studioPrice = studioPrice * 0.95
            }
            break
        case 'June':
        case 'September':
            studioPrice = 75.2 * nights
            apartamentPrice = 68.7 * nights
            if (nights > 14) {
                studioPrice = studioPrice * 0.8
            }
            break
        case 'July':
        case 'August':
            studioPrice = 76 * nights
            apartamentPrice = 77 * nights
            break
    }
    if (nights > 14) {
        apartamentPrice = apartamentPrice * 0.9
    }

    console.log(`Apartment: ${apartamentPrice.toFixed(2)} lv.`)
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
}

function onTime(examHour, examMinute, arrivalHour, arrivalMinute) {
    examHour = Number(examHour)
    examMinute = Number(examMinute)
    arrivalHour = Number(arrivalHour)
    arrivalMinute = Number(arrivalMinute)

    let totalExamMinutes = examHour * 60 + examMinute
    let totalArrivalMinute = arrivalHour * 60 + arrivalMinute
    let diff = totalExamMinutes - totalArrivalMinute

    if (diff > 30) {
        console.log('Early')
        if (diff >= 60) {
            let hours = Math.trunc(diff / 60)
            let minutes = diff % 60
            if (minutes < 10) {
                minutes = `0${minutes}`
            }
            console.log(`${hours}:${minutes} hours before the start`)
        } else {
            console.log(`${diff} minutes before the start`)
        }
    } else if (diff >= 0) {
        console.log('On time')
        if (diff !== 0) {
            console.log(`${diff} minutes before the start`)
        }
    } else {
        console.log('Late')
        diff = Math.abs(diff)
        if (diff >= 60) {
            let hours = Math.trunc(diff / 60)
            let minutes = diff % 60
            if (minutes < 10) {
                minutes = `0${minutes}`
            }
            console.log(`${hours}:${minutes} hours after the start`)
        } else {
            console.log(`${diff} minutes after the start`)
        }
    }
}

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
