/* eslint-disable class-methods-use-this */
class Hex {
    constructor(value) {
        this.value = value
    }

    valueOf() {
        return this.value
    }

    plus(number) {
        return new Hex(this.value + number)
    }

    minus(number) {
        return new Hex(this.value - number)
    }

    toString() {
        return `0x${this.value.toString(16).toUpperCase()}`
    }

    parse(string) {
        return string.slice(2).toString(10)
    }
}
