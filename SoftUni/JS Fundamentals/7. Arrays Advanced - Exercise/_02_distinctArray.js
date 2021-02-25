function distinctArray(arr) {
    const dist = []

    for (const n of arr) {
        if (!dist.includes(n)) {
            dist.push(n)
        }
    }

    console.log(dist.join(' '))
}
