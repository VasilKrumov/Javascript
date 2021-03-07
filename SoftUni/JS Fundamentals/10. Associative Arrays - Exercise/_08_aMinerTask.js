function minerTask(arr = []) {
    const mined = {}
    while (arr.length > 0) {
        const res = arr.shift()
        const value = Number(arr.shift())
        mined[res] = value + (mined[res] || 0)
    }

    Object.entries(mined).forEach(([res, value]) => {
        console.log(`${res} -> ${value}`)
    })
}
