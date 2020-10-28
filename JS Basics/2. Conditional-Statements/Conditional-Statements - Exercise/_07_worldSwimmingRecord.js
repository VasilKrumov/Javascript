function worldSwimmingRecord(recordS, distanceM, timePerMeter) {
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
