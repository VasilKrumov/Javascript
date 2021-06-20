class Rectangle {
    constructor(width, height, color) {
        this.width = width
        this.height = height
        this.color = color
    }

    get width() {
        return this._width
    }

    set width(value) {
        if (typeof value !== 'number') {
            return new TypeError('The value must be a number.')
        }

        this._width = value
    }

    get height() {
        return this._height
    }

    set height(value) {
        if (typeof value !== 'number') {
            return new TypeError('The value must be a number.')
        }

        this._height = value
    }

    get color() {
        return this._color[0].toUpperCase() + this._color.slice(1)
    }

    set color(value) {
        if (typeof value !== 'string') {
            return new TypeError('The value must be a string.')
        }

        this._color = value
    }

    calcArea() {
        return this._height * this._width
    }
}

const rect = new Rectangle(4, 5, 'Red')
console.log(rect.width)
console.log(rect.height)
console.log(rect.color)
console.log(rect.calcArea())
