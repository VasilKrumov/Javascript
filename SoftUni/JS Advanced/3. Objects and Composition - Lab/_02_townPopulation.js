function townPopulation(towns) {
    const populations = {}

    towns.forEach((line) => {
        const [town, population] = line.split(' <-> ')
        populations[town] = Number(population) + (populations[town] || 0)
    })

    Object.entries(populations).forEach(([town, population]) => {
        console.log(`${town} : ${population}`)
    })
}