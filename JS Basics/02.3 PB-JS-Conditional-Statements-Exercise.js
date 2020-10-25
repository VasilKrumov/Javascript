function solve(firstTime, secondTime, thirdTime) {
    firstTime = Number(firstTime)
    secondTime = Number(secondTime)
    thirdTime = Number(thirdTime)

    let totalSeconds = firstTime + secondTime + thirdTime
    let minutes = Math.trunc(totalSeconds / 60)
    let seconds = totalSeconds % 60

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`)
    } else {
        console.log(`${minutes}:${seconds}`)
    }
}

function solve2(points) {
    points = Number(points)
    let bonusPoints

    if (points > 1000) {
        bonusPoints = points * 0.1
    } else if (points >= 100) {
        bonusPoints = points * 0.2
    } else {
        bonusPoints = 5
    }

    if (points % 2 === 0) {
        bonusPoints += 1
    }

    if (points % 10 === 5) {
        bonusPoints += 2
    }

    console.log(bonusPoints)
    console.log(points + bonusPoints)
}

function solve3(speed) {
    speed = Number(speed)

    if (speed <= 10) {
        console.log('slow')
    } else if (speed <= 50) {
        console.log('average')
    } else if (speed <= 150) {
        console.log('fast')
    } else if (speed > 150 && speed <= 1000) {
        console.log('ultra fast')
    } else {
        console.log('extremely fast')
    }
}

function solve4(toConvert, firstUnit, secondUnit) {
    toConvert = Number(toConvert)
    let result

    if (firstUnit === 'mm') {
        if (secondUnit === 'm') {
            result = toConvert / 1000
        } else if (secondUnit === 'cm') {
            result = toConvert / 10
        } else {
            result = toConvert
        }
    } else if (firstUnit === 'cm') {
        if (secondUnit === 'm') {
            result = toConvert / 100
        } else if (secondUnit === 'mm') {
            result = toConvert * 10
        } else {
            result = toConvert
        }
    } else {
        if (secondUnit === 'cm') {
            result = toConvert * 100
        } else if (secondUnit === 'mm') {
            result = toConvert * 1000
        } else {
            result = toConvert
        }
    }

    console.log(result.toFixed(3))
}

function solve5(hour, minutes) {
    hour = Number(hour)
    minutes = Number(minutes)

    let totalMinutes = hour * 60 + minutes + 15
    let resultHour = Math.trunc(totalMinutes / 60)
    let resultMinutes = totalMinutes % 60

    if (resultHour === 24) {
        resultHour = 0
    }

    if (resultMinutes < 10) {
        console.log(`${resultHour}:0${resultMinutes}`)
    } else {
        console.log(`${resultHour}:${resultMinutes}`)
    }
}

function solve6(budget, extras, priceForExtra) {
    budget = Number(budget)
    extras = Number(extras)
    priceForExtra = Number(priceForExtra)

    let decorPrice = budget * 0.1
    let clothingPrice = extras * priceForExtra

    if (extras > 150) {
        clothingPrice = clothingPrice - clothingPrice * 0.1
    }

    let total = decorPrice + clothingPrice

    if (total > budget) {
        let needed = total - budget
        console.log('Not enough money!')
        console.log(`Wingard needs ${needed.toFixed(2)} leva more.`)
    } else {
        let left = budget - total
        console.log('Action!')
        console.log(`Wingard starts filming with ${left.toFixed(2)} leva left.`)
    }
}

function solve7(recordS, distanceM, timePerMeter) {
    recordS = Number(recordS)
    distanceM = Number(distanceM)
    timePerMeter = Number(timePerMeter)

    let ivanTimeS = distanceM * timePerMeter
    ivanTimeS = ivanTimeS + Math.floor(distanceM / 15) * 12.5

    if (ivanTimeS < recordS) {
        console.log(`Yes, he succeeded! The new world record is ${ivanTimeS.toFixed(
            2
        )} seconds.
        `)
    } else {
        let left = ivanTimeS - recordS
        console.log(`No, he failed! He was ${left.toFixed(2)} seconds slower.`)
    }
}

function solve8(salary, gpa, minSalary) {
    salary = Number(salary)
    gpa = Number(gpa)
    minSalary = Number(minSalary)

    let socialScolarship = 0
    let excellentScolarship = 0

    if (salary < minSalary) {
        if (gpa > 4.5) {
            socialScolarship = minSalary * 0.35
        }
    }

    if (gpa >= 5.5) {
        excellentScolarship = gpa * 25
    }

    if (socialScolarship > excellentScolarship) {
        console.log(
            `You get a Social scholarship ${Math.floor(socialScolarship)} BGN`
        )
    } else if (excellentScolarship > socialScolarship) {
        console.log(
            `You get a scholarship for excellent results ${Math.floor(
                excellentScolarship
            )} BGN`
        )
    } else {
        console.log('You cannot get a scholarship!')
    }
}

solve8('480.00', '4.60', '450.00')
