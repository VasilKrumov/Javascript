/* eslint-disable */
function townsToJSON(array) {
    array.shift()
    return JSON.stringify(
        array.map((line) => {
            ;[Town, Latitude, Longitude] = line
                .split(/\| | \| | \|/g)
                .filter((x) => x !== '')
                .map((x) => (isNaN(x) ? x : Number(Number(x).toFixed(2))))
            return {
                Town,
                Latitude,
                Longitude,
            }
        })
    )
}
