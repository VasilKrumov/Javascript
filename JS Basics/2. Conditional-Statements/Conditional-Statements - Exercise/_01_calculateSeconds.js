function calculateSeconds(firstTime, secondTime, thirdTime) {
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
