function storeProvision(_stock = [], _ordered = []) {
    const products = []
    while (_stock.length > 0) {
        products.push({ name: _stock.shift(), quantity: Number(_stock.shift()) })
    }

    while (_ordered.length > 0) {
        const name = _ordered.shift()
        const quantity = Number(_ordered.shift())
        const index = products.findIndex((obj) => obj.name === name)
        if (index > -1) {
            products[index].quantity += quantity
        } else {
            products.push({ name, quantity })
        }
    }

    products.forEach((el) => {
        console.log(`${el.name} -> ${el.quantity}`)
    })
}
