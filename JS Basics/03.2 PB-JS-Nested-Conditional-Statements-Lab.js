function dayOfTheWeek(num) {
    num = Number(num)
    switch (num) {
        case 1:
            console.log('Monday')
            break
        case 2:
            console.log('Tuesday')
            break
        case 3:
            console.log('Wednesday')
            break
        case 4:
            console.log('Thursday')
            break
        case 5:
            console.log('Friday')
            break
        case 6:
            console.log('Saturday')
            break
        case 7:
            console.log('Sunday')
            break
        default:
            console.log('Error')
            break
    }
}

function workingDay(dayOfWeek) {
    switch (dayOfWeek) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            console.log('Working day')
            break
        case 'Saturday':
        case 'Sunday':
            console.log('Weekend')
            break
        default:
            console.log('Error')
            break
    }
}

function animalType(animalType) {
    switch (animalType) {
        case 'dog':
            console.log('mammal')
            break
        case 'tortoise':
        case 'snake':
        case 'crocodile':
            console.log('reptile')
            break
        default:
            console.log('unknown')
            break
    }
}

function greetings(age, gender) {
    if (gender === 'f') {
        if (age >= 16) {
            console.log('Ms.')
        } else {
            console.log('Miss')
        }
    } else {
        if (age >= 16) {
            console.log('Mr.')
        } else {
            console.log('Master')
        }
    }
}

function tuturutkaMagazin(product, town, quantity) {
    quantity = Number(quantity)
    let price = 0

    if (town === 'Sofia') {
        switch (product) {
            case 'coffee':
                price = quantity * 0.5
                break
            case 'water':
                price = quantity * 0.8
                break
            case 'beer':
                price = quantity * 1.2
                break
            case 'sweets':
                price = quantity * 1.45
                break
            case 'peanuts':
                price = quantity * 1.6
                break
        }
    } else if (town === 'Plovdiv') {
        switch (product) {
            case 'coffee':
                price = quantity * 0.4
                break
            case 'water':
                price = quantity * 0.7
                break
            case 'beer':
                price = quantity * 1.15
                break
            case 'sweets':
                price = quantity * 1.3
                break
            case 'peanuts':
                price = quantity * 1.5
                break
        }
    } else if (town === 'Varna') {
        switch (product) {
            case 'coffee':
                price = quantity * 0.45
                break
            case 'water':
                price = quantity * 0.7
                break
            case 'beer':
                price = quantity * 1.1
                break
            case 'sweets':
                price = quantity * 1.35
                break
            case 'peanuts':
                price = quantity * 1.55
                break
        }
    }
    console.log(price)
}

function numberInterval(num) {
    num = Number(num)

    if (num >= -100 && num <= 100 && num !== 0) {
        console.log('Yes')
    } else {
        console.log('No')
    }
}

function ticketPrice(day) {
    let price = 0
    if (day === 'Monday' || day === 'Tuesday' || day === 'Friday') {
        price = 12
    } else if (day === 'Wednesday' || day === 'Thursday') {
        price = 14
    } else if (day === 'Saturday' || day === 'Sunday') {
        price = 16
    }
    console.log(price)
}

function isValid(num) {
    num = Number(num)
    let isValid = (num >= 100 && num <= 200) || num === 0

    if (!isValid) {
        console.log('invalid')
    }
}

function workingHours(hour, day) {
    hour = Number(hour)

    if (
        day === 'Monday' ||
        day === 'Tuesday' ||
        day === 'Wednesday' ||
        day === 'Thursday' ||
        day === 'Friday' ||
        day === 'Saturday'
    ) {
        if (hour >= 10 && hour <= 18) {
            console.log('open')
        } else {
            console.log('closed')
        }
    } else if (day === 'Sunday') {
        console.log('closed')
    }
}

function fruitOrVegetable(params) {
    switch (params) {
        case 'banana':
        case 'apple':
        case 'kiwi':
        case 'cherry':
        case 'lemon':
        case 'grapes':
            console.log('fruit')
            break
        case 'tomato':
        case 'cucumber':
        case 'pepper':
        case 'carrot':
            console.log('vegetable')
            break
        default:
            console.log('unknown')
            break
    }
}

function fruitShop(fruit, day, quantity) {
    quantity = Number(quantity)
    let price = 0

    let allowedFruits = false
    let allowedDays = false

    if (
        fruit === 'banana' ||
        fruit === 'apple' ||
        fruit === 'orange' ||
        fruit === 'grapefruit' ||
        fruit === 'kiwi' ||
        fruit === 'pineapple' ||
        fruit === 'grapes'
    ) {
        allowedFruits = true
    }

    if (
        day === 'Monday' ||
        day === 'Tuesday' ||
        day === 'Wednesday' ||
        day === 'Thursday' ||
        day === 'Friday' ||
        day === 'Saturday' ||
        day === 'Sunday'
    ) {
        allowedDays = true
    }

    if (allowedFruits && allowedDays) {
        switch (day) {
            case 'Monday':
            case 'Tuesday':
            case 'Wednesday':
            case 'Thursday':
            case 'Friday':
                switch (fruit) {
                    case 'banana':
                        price = quantity * 2.5
                        break
                    case 'apple':
                        price = quantity * 1.2
                        break
                    case 'orange':
                        price = quantity * 0.85
                        break
                    case 'grapefruit':
                        price = quantity * 1.45
                        break
                    case 'kiwi':
                        price = quantity * 2.7
                        break
                    case 'pineapple':
                        price = quantity * 5.5
                        break
                    case 'grapes':
                        price = quantity * 3.85
                        break
                }
                break
            case 'Saturday':
            case 'Sunday':
                switch (fruit) {
                    case 'banana':
                        price = quantity * 2.7
                        break
                    case 'apple':
                        price = quantity * 1.25
                        break
                    case 'orange':
                        price = quantity * 0.9
                        break
                    case 'grapefruit':
                        price = quantity * 1.6
                        break
                    case 'kiwi':
                        price = quantity * 3.0
                        break
                    case 'pineapple':
                        price = quantity * 5.6
                        break
                    case 'grapes':
                        price = quantity * 4.2
                        break
                }
        }
        console.log(price.toFixed(2))
    } else {
        console.log('error')
    }
}

function tradeComission(city, count) {
    count = Number(count)
    switch (city) {
        case 'Sofia':
            if (count < 0) {
                console.log('error')
            } else {
                if (count >= 0 && count <= 500) {
                    console.log((count * 0.05).toFixed(2))
                } else if (count > 500 && count <= 1000) {
                    console.log((count * 0.07).toFixed(2))
                } else if (count > 1000 && count <= 10000) {
                    console.log((count * 0.08).toFixed(2))
                } else {
                    console.log((count * 0.12).toFixed(2))
                }
            }
            break
        case 'Varna':
            if (count < 0) {
                console.log('error')
            } else {
                if (count >= 0 && count <= 500) {
                    console.log((count * 0.045).toFixed(2))
                } else if (count > 500 && count <= 1000) {
                    console.log((count * 0.075).toFixed(2))
                } else if (count > 1000 && count <= 10000) {
                    console.log((count * 0.1).toFixed(2))
                } else {
                    console.log((count * 0.13).toFixed(2))
                }
            }
            break
        case 'Plovdiv':
            if (count < 0) {
                console.log('error')
            } else {
                if (count >= 0 && count <= 500) {
                    console.log((count * 0.055).toFixed(2))
                } else if (count > 500 && count <= 1000) {
                    console.log((count * 0.08).toFixed(2))
                } else if (count > 1000 && count <= 10000) {
                    console.log((count * 0.12).toFixed(2))
                } else {
                    console.log((count * 0.145).toFixed(2))
                }
            }
            break
        default:
            console.log('error')
            break
    }
}

function skiTrip(
    days,
    roomType = 'room for one person' | 'apartment' | 'president apartment',
    assessment = 'positive' | 'negative'
) {
    days = Number(days)
    nights = days - 1
    let total = 0
    let discount = 1
    let positiveScore = 1.25
    let negativeScore = 0.9

    if (assessment === 'positive') {
        if (roomType === 'room for one person') {
            discount = 1
            total = nights * 18 * discount * positiveScore
        } else if (roomType === 'apartment') {
            if (nights < 10) {
                discount = 0.7
                total = nights * 25 * discount * positiveScore
            } else if (nights >= 10 && nights <= 15) {
                discount = 0.65
                total = nights * 25 * discount * positiveScore
            } else if (nights > 15) {
                discount = 0.5
                total = nights * 25 * discount * positiveScore
            }
        } else if (roomType === 'president apartment') {
            if (nights < 10) {
                discount = 0.9
                total = nights * 35 * discount * positiveScore
            } else if (nights >= 10 && nights <= 15) {
                discount = 0.85
                total = nights * 35 * discount * positiveScore
            } else if (nights > 15) {
                discount = 0.8
                total = nights * 35 * discount * positiveScore
            }
        }
    } else if (assessment === 'negative') {
        if (roomType === 'room for one person') {
            discount = 1
            total = nights * 18 * discount * negativeScore
        } else if (roomType === 'apartment') {
            if (nights < 10) {
                discount = 0.7
                total = nights * 25 * discount * negativeScore
            } else if (nights >= 10 && nights <= 15) {
                discount = 0.65
                total = nights * 25 * discount * negativeScore
            } else if (nights > 15) {
                discount = 0.5
                total = nights * 25 * discount * negativeScore
            }
        } else if (roomType === 'president apartment') {
            if (nights < 10) {
                discount = 0.9
                total = nights * 35 * discount * negativeScore
            } else if (nights >= 10 && nights <= 15) {
                discount = 0.85
                total = nights * 35 * discount * negativeScore
            } else if (nights > 15) {
                discount = 0.8
                total = nights * 35 * discount * negativeScore
            }
        }
    }
    console.log(total.toFixed(2))
}

skiTrip('14', 'apartment', 'positive')
