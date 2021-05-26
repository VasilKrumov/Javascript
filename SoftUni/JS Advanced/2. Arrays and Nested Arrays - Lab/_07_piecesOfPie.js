function piecesOfPie(array, startFlsvor, endFlavor) {
    const startIndex = array.indexOf(startFlsvor)
    const endIndex = array.indexOf(endFlavor)
    const result = array.slice(startIndex, endIndex + 1)
    return result
}
