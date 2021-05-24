/* eslint-disable no-cond-assign */
/* eslint-disable no-undef */
function circleArea(radius) {
    if ((type = typeof radius) !== 'number') {
        return console.log(`We can not calculate the circle area, because we receive a ${type}.`)
    }

    console.log((radius ** 2 * Math.PI).toFixed(2))
}
