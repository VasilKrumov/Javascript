function hellsKitchen() {
    document.querySelector('#btnSend').addEventListener('click', onClick)

    function onClick() {
        // 1. Select DOM elements
        const inputTextAreaElement = document.querySelector('#inputs textarea')

        // 2. Extract/Transform input
        const inputStr = inputTextAreaElement.value
        const inputArr = JSON.parse(inputStr)

        // 3. Create object to hold restaurants
        const restaurants = {}

        // 4. Insert input data into restaurant object
        inputArr.forEach((el) => {
            // 4.a Format input data - spliting, parsing etc.
            const [restaurantName, workersString] = el.split(' - ')
            const inputWorkers = workersString.split(', ').map((x) => {
                const [name, salary] = x.split(' ')
                return { name, salary: Number(salary) }
            })

            // 4.b If we have no information about the restaurant,
            // create an object holding information about it
            if (restaurants[restaurantName] === undefined) {
                restaurants[restaurantName] = {
                    restaurantName,
                    workers: [],
                    getAverageSalary() {
                        return this.workers.reduce((acc, el) => acc + el.salary, 0) / this.workers.length
                    },
                }
            }

            // 4.c Add workers from the current input to the restaurant
            // (in 4.b we make sure we have created an object for the restaurant)
            restaurants[restaurantName].workers = restaurants[restaurantName].workers.concat(inputWorkers)
        })

        // 5. Sort the restaurants by average salary in descending order
        const sortedRestaurants = Object.values(restaurants).sort((a, b) => b.getAverageSalary() - a.getAverageSalary())
        const bestRestaurant = sortedRestaurants[0]

        // 5.a Sort the workers in descending order by salary
        bestRestaurant.workers.sort((a, b) => b.salary - a.salary)

        // 6.a Format the averageSalary and bestSalary
        const averageSalary = bestRestaurant.getAverageSalary().toFixed(2)
        const bestSalary = bestRestaurant.workers[0].salary.toFixed(2)

        // 6.b Create the formatted output
        const bestRestaurantString = `Name: ${bestRestaurant.restaurantName} Average Salary: ${averageSalary} Best Salary: ${bestSalary}`
        const workersString = bestRestaurant.workers.map((x) => `Name: ${x.name} With Salary: ${x.salary}`).join(' ')

        // 7. Insert output into DOM (pay attention to what the elements are, since they are <p>'s we use textContent)
        const bestRestaurantDiv = document.querySelector('#bestRestaurant p')
        const workersDiv = document.querySelector('#workers p')
        bestRestaurantDiv.textContent = bestRestaurantString
        workersDiv.textContent = workersString
    }
}
