function searchForNumber(arr = [], [countTake = 1, countDelete = 1, searched = 1]) {
    const collection = arr.slice(countDelete, countTake)
    console.log(`Number ${searched} occurs ${collection.filter((el) => el === searched).length} times.`)
}
