// Write a function to sum a range of numeric elements from an array.
// The function takes three parameters - the first is an array, the second is the start index and the third is the end index.
// Both indexes are inclusive. Have in mind that the array elements may not be of type Number and cast everything.
//  Implement the following error handling:
// •	If the first element is not an array, return NaN
// •	If the start index is less than zero, consider its value to be a zero
// •	If the end index is outside the bounds of the array, assume it points to the last index of the array
// Input / Output
// Your function must take three parameters. As output, return the sum.

function subSum(arr, start, end) {
    if (start < 0) {
        start = 0
    }

    if (Array.isArray(arr) === false) {
        return NaN
    }

    return arr.slice(start, end + 1).reduce((a, c) => a + Number(c), 0)
}

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300))
subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)
subSum([10, 'twenty', 30, 40], 0, 2)
subSum([], 1, 2)
subSum('text', 0, 2)
