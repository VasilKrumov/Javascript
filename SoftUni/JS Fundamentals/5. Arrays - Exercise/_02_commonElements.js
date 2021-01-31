function commonElements(firstArray, secondArray) {
    for (const element of firstArray) {
        for (const secondElement of secondArray) {
            if (element === secondElement) {
                console.log(element)
                break
            }
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2'])
