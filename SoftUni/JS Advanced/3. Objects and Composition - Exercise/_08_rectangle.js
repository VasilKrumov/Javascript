function rectangle(width, height, color) {
    color = color.substring(0, 1).toUpperCase() + color.slice(1)
    return {
        width,
        height,
        color,
        calcArea() {
            return this.width * this.height
        },
    }
}
