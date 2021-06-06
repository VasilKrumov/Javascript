function heroicInventory(arr) {
    const heroes = []

    arr.forEach((line) => {
        let [name, level, items] = line.split(' / ')
        items = items ? items.split(', ') : []
        const heroObj = {
            name,
            level: Number(level),
            items,
        }

        heroes.push(heroObj)
    })

    console.log(JSON.stringify(heroes))
}
