function spiceMustFlow(startingYield = 1) {
    let [yieldStorage, yields, days] = [0, startingYield, 0]
    while (yields > 99) {
        ;[days, yieldStorage, yields] = [days + 1, yieldStorage + yields - 26, yields - 10]
    }

    yieldStorage -= yieldStorage > 25 ? 26 : yieldStorage
    console.log(`${days}\n${yieldStorage}`)
}
