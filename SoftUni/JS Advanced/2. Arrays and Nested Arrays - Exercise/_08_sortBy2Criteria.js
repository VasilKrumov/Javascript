function sortBy2Criteria(array) {
    const sorted = array.sort((a, b) => {
        const aLength = a.length
        const bLength = b.length
        if (aLength - bLength > 0) {
            return 1
        }
        if (aLength - bLength < 0) {
            return -1
        }
        return a.localeCompare(b)
    })

    console.log(sorted.join('\n'))
}
