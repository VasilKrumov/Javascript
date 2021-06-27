class Parking {
    constructor(capacity) {
        this.capacity = capacity
        this.vehicles = []
    }

    addCar(carModel, carNumber) {
        if (this.capacity === 0) {
            throw new Error('Not enough parking space.')
        }
        this.vehicles.push({ carModel, carNumber, payed: false })
        this.capacity--
        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    }

    removeCar(carNumber) {
        const carIndex = this.vehicles.findIndex((car) => car.carNumber === carNumber)
        if (carIndex < 0) {
            throw new Error(`The car, you're looking for, is not found.`)
        }

        if (!this.vehicles[carIndex].payed) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`)
        }

        this.vehicles.splice(carIndex, 1)
        this.capacity++
        return `${carNumber} left the parking lot.`
    }

    pay(carNumber) {
        const car = this.vehicles.find((car) => car.carNumber === carNumber)

        if (!car) {
            throw new Error(`${carNumber} is not in the parking lot.`)
        }

        if (car.payed) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`)
        }
        car.payed = true
        return `${carNumber}'s driver successfully payed for his stay.`
    }

    getStatistics(carNumber) {
        if (!carNumber) {
            return [
                `The Parking Lot has ${this.capacity} empty spots left.`,
                this.vehicles
                    .sort((a, b) => a.carModel.localeCompare(b.carModel))
                    .map((car) => `${car.carModel} == ${car.carNumber} - ${car.payed ? `Has payed` : `Not payed`}`)
                    .join('\n'),
            ].join('\n')
        }
        const car = this.vehicles.find((car) => car.carNumber === carNumber)
        return `${car.carModel} == ${car.carNumber} - ${car.payed ? `Has payed` : `Not payed`}`
    }
}
