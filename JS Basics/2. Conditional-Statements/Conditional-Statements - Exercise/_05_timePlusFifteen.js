function timePlusFifteen(hour, minutes) {
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
