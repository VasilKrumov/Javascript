/* eslint-disable */
function autoCompany(arr) {
    const splitted = []
    for (let i = 0; i < arr.length; i++) {
        splitted.push(arr[i].split(' | '))
    }

    const storage = new Map()

    for (let i = 0; i < splitted.length; i++) {
        const cars = splitted[i]

        const [brand, model, quantity] = cars
        if (!storage.has(brand)) {
            storage.set(brand, new Map())
        }

        if (!storage.get(brand).has(model)) {
            storage.get(brand).set(model, 0)
        }
        const value = storage.get(brand).get(model)
        storage.get(brand).set(model, value + Number(quantity))
    }
    const resultString = []
    for ([brand, model] of storage.entries()) {
        let result = `${brand}\n`
        for (const [name, quantity] of model.entries()) {
            result += `###${name} -> ${quantity}\n`
        }
        resultString.push(result.trim())
    }
    return resultString.join('\n')
}
