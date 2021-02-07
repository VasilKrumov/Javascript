function loadingBar(num = 1) {
    const progress = num / 10

    if (progress === 10) {
        return console.log('100% Complete!\n[%%%%%%%%%%]')
    }

    const bar = `${num}% [${'%'.repeat(progress)}${'.'.repeat(10 - progress)}]`
    console.log(`${bar}\nStill loading...`)
}
