/* eslint-disable no-undef */
/* eslint-disable no-cond-assign */
function dayOfWeek(dayName = '') {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    console.log((index = daysOfWeek.indexOf(dayName)) > -1 ? index + 1 : 'error')
}
