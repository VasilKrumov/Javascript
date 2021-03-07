function catalogue(input = []) {
    const catalogue = {}
    input.forEach((line) => {
        const [name, price] = line.split(' : ')
        catalogue[name] = price
    })

    let letter
    Object.entries(catalogue)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([name, price]) => {
            if (name[0] !== letter) {
                // eslint-disable-next-line prefer-destructuring
                letter = name[0]
                console.log(name[0])
            }

            console.log(`  ${name}: ${price}`)
        })
}
