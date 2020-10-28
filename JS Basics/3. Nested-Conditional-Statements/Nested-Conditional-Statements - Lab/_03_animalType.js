function animalType(animalType) {
    switch (animalType) {
        case 'dog':
            console.log('mammal')
            break
        case 'tortoise':
        case 'snake':
        case 'crocodile':
            console.log('reptile')
            break
        default:
            console.log('unknown')
            break
    }
}
