function timeToWalk(steps = 1, footprintLengthM = 1, speedKMH = 1) {
    const distance = steps * footprintLengthM
    const speedMSec = (speedKMH * 1000) / 60 / 60
    const restsInSecs = parseInt(distance / 500) * 60
    const timeSecs = Math.round(distance / speedMSec + restsInSecs)

    const date = new Date(null, null, null, null, null, timeSecs)
    const timeFormat = date.toLocaleTimeString([], { hour12: false })

    console.log(timeFormat)
}
