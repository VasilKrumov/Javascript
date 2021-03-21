function cutAndReverse(str) {
    const firstHalf = str.substring(0, str.length / 2)
    const secondHalf = str.substring(str.length / 2)

    console.log(firstHalf.split('').reverse().join(''))
    console.log(secondHalf.split('').reverse().join(''))
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')
