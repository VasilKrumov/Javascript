function hello() {
    console.log('im awesome')
}

function printNumbers() {
    for (let i = 1; i < 11; i++) {
        console.log(i)
    }
}

function calculateSquareArea(input) {
    let singleSide = Number(input)
    let squareResult = singleSide * singleSide
    console.log(squareResult)
}

function helloNamedUser(input) {
    let userName = String(input)
    let greetings = `Hello, ${input}!`
    console.log(greetings)
}

function nameAndAge(fname, lname, age, town) {
    let returnedOutput = `You are ${fname} ${lname}, a ${age}-years old person from ${town}.`
    console.log(returnedOutput)
}

function inchesToSm(inch) {
    let calculatedCm = inch * 2.54
    console.log(calculatedCm)
}

function archProjects(aName, projectCount) {
    console.log(
        `The architect ${aName} will need ${
            projectCount * 3
        } hours to complete ${projectCount} project/s.`
    )
}

function petShop(dogs, others) {
    const dogFood = 2.5
    const otherFood = 4
    const endBill = dogs * dogFood + others * otherFood
    console.log(`${endBill} lv.`)
}

function gardeningGreening(squareMeters) {
    const greeningPrice = 7.61
    const discount = 0.18
    const totalCost = squareMeters * greeningPrice
    const totalDiscount = totalCost * discount
    const finalPrice = totalCost - totalDiscount
    console.log(`The final price is ${finalPrice} lv.`)
    console.log(`The discount is ${totalDiscount} lv.`)
}
