function roadRadar(speed, type) {
    const citySpeed = {
        city: 50,
        motorway: 130,
        residential: 20,
        interstate: 90,
    }
    speed = Number(speed)
    const diff = speed - citySpeed[type]
    if (citySpeed[type] >= speed && speed > 0) {
        console.log(`Driving ${speed} km/h in a ${citySpeed[type]} zone`)
    } else if (citySpeed[type] + 20 >= speed) {
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${citySpeed[type]} - speeding`)
    } else if (citySpeed[type] + 40 >= speed) {
        console.log(
            `The speed is ${diff} km/h faster than the allowed speed of ${citySpeed[type]} - excessive speeding`
        )
    } else {
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${citySpeed[type]} - reckless driving`)
    }
}
