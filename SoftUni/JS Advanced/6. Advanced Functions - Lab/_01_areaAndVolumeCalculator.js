function solve(area, vol, input) {
    const figures = JSON.parse(input)

    const result = []

    for (const figure of figures) {
        const output = {
            area: area.call(figure),
            volume: vol.call(figure),
        }

        result.push(output)
    }
}

function area() {
    return Math.abs(this.x * this.y)
}

function vol() {
    return Math.abs(this.x * this.y * this.z)
}
