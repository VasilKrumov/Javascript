function calorieObject(arr) {
    const caloriesObj = {}
    for (let i = 0; i < arr.length; i += 2) {
        caloriesObj[arr[i]] = Number(arr[i + 1])
    }

    console.log(caloriesObj)
}
