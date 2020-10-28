function converter(toConvert, firstUnit, secondUnit) {
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
