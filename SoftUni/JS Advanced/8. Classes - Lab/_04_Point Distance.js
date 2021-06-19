class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    static distance(a, b) {
        if (a instanceof Point === false || b instanceof Point === false) {
            throw new TypeError('Parameter must be of type Point')
        }

        return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2)
    }
}
