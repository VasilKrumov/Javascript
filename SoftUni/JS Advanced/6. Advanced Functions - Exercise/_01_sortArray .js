function sortArray(arr, sortOrder) {
    return sortOrder === 'asc' ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a)
}
