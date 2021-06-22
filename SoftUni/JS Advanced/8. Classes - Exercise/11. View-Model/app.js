class Textbox {
    constructor(selector, invalidRegex) {
        this._elements = document.querySelectorAll(selector)
        this._invalidSymbols = invalidRegex
        Array.from(this._elements).forEach((el) => el.addEventListener('change', (e) => (this.value = e.target.value)))
    }

    get elements() {
        return this._elements
    }

    get value() {
        return this._elements[0].value
    }

    set value(val) {
        Array.from(this._elements).forEach((el) => (el.value = val))
    }

    isValid() {
        return !this._invalidSymbols.test(this.elements[0].value)
    }
}
