function cinema(type, rows, columns) {
    rows = Number(rows)
    columns = Number(columns)
    let income = 0

    if (type === 'Premiere') {
        income = rows * columns * 12
    } else if (type === 'Normal') {
        income = rows * columns * 7.5
    } else if (type === 'Discount') {
        income = rows * columns * 5
    }
    console.log(income.toFixed(2))
}
