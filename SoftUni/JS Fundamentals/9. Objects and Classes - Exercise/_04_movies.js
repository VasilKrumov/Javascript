function movies(input = []) {
    const movies = []
    for (let i = 0; i < input.length; i++) {
        const args = input[i].split(' ')
        if (args[0] === 'addMovie') {
            movies.push({ name: args.slice(1).join(' ') })
        } else {
            const indexBy = args.indexOf('directedBy')
            const indexOn = args.indexOf('onDate')
            if (indexBy !== -1) {
                const name = args.slice(0, indexBy).join(' ')
                const movie = movies.find((m) => m.name === name)
                if (movie) {
                    movie.director = args.slice(indexBy + 1).join(' ')
                }
            } else if (indexOn !== -1) {
                const name = args.slice(0, indexOn).join(' ')
                const movie = movies.find((m) => m.name === name)
                if (movie) {
                    movie.date = args.pop()
                }
            }
        }
    }

    movies.forEach((m) => {
        if (m.director && m.date) {
            console.log(JSON.stringify(m))
        }
    })
}
