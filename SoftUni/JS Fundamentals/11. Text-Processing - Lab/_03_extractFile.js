function extractFile(path) {
    const pointIndex = path.lastIndexOf('.')
    const slashIndex = path.lastIndexOf('\\')

    const extension = path.substring(pointIndex + 1)
    const file = path.substring(slashIndex + 1, pointIndex)

    console.log(`File name: ${file}`)
    console.log(`File extension: ${extension}`)
}
