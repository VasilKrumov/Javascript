function palindromeIntegers(array) {
    function isPolindrome(n) {
        const reversedN = n.toString().split('').reverse().join('')
        return Number(reversedN) === n
    }

    for (const n of array) {
        console.log(isPolindrome(n))
    }
}

palindromeIntegers([123, 323, 421, 121])
