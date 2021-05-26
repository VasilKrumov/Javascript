function lastKsequence(n, k) {
    const result = [1]

    for (let i = 1; i < n; i++) {
        const temp = result.slice(-k)
        const redused = temp.reduce((acc, el) => acc + Number(el), 0)
        result.push(redused)
    }

    return result
}
