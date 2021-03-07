function employees(input = []) {
    input.forEach((name) => {
        const employee = {
            name,
            number: name.length,
        }

        console.log(`Name: ${employee.name} -- Personal Number: ${employee.number}`)
    })
}
