function train(arr) {
    const wagons = arr.shift().split(' ').map(Number)
    const capacity = Number(arr.shift())

    for (const line of arr) {
        const [comm, n] = line.split(' ')

        if (comm === 'Add') {
            wagons.push(Number(n))
        } else {
            const passengers = Number(comm)
            for (let i = 0; i < wagons.length; i++) {
                if (wagons[i] + passengers <= capacity) {
                    wagons[i] += passengers
                    break
                }
            }
        }
    }

    console.log(wagons.join(' '))
}
