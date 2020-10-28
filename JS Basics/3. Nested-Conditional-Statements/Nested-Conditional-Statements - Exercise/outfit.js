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
