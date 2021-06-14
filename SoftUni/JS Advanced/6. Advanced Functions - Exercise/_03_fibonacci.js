function fibonacci() {
    let prev = 1
    let cur = 0
    function inner() {
        const next = prev + cur
        prev = cur
        cur = next
        return cur
    }
    return inner
}
