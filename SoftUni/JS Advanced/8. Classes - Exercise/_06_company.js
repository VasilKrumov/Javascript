class Company {
    #departments

    constructor() {
        this.#departments = []
    }

    addEmployee(username, salary, position, department) {
        if (!username || !position || !department || salary <= 0) {
            throw new Error('Invalid input!')
        }

        const newEmploy = {
            username,
            salary: Number(salary),
            position,
        }

        if (!this.#departments[department]) {
            this.#departments[department] = []
        }
        this.#departments[department].push(newEmploy)
        console.log(this.#departments)

        return `New employee is hired. Name: ${username}. Position: ${position}`
    }

    bestDepartment() {
        let department = ''
        let maxSalary = 0
        Object.entries(this.#departments).forEach(([key, value]) => {
            let salary = 0
            value.forEach((e) => {
                salary += e.salary
            })
            salary /= value.length
            if (salary > maxSalary) {
                department = key
                maxSalary = salary
            }
        })
        if (department !== '') {
            let res = `Best Department is: ${department}\nAverage salary: ${maxSalary.toFixed(2)}\n`
            Object.values(this.#departments[department])
                .sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username))
                .forEach((e) => {
                    const em = `${e.username} ${e.salary} ${e.position}\n`
                    res += em
                })
            return res.trim()
        }
    }
}
