function towns(input = []) {
    input.forEach((el) => {
        const [town, latitude, longitude] = el.split(' | ')
        console.log({ town, latitude: Number(latitude).toFixed(2), longitude: Number(longitude).toFixed(2) })
    })
}
