function piccolo(input = []) {
    const parkingLog = [
        ...input.reduce((cars, line) => {
            const [direction, car] = line.split(', ')
            cars[direction === 'IN' ? 'add' : 'delete'](car)
            return cars
        }, new Set()),
    ].sort()

    return parkingLog.length ? parkingLog.join('\n') : 'Parking Lot is Empty'
}