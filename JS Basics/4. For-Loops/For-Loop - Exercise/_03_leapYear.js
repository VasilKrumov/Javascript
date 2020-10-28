function leapYear(startYear, endYear) {
    startYear = Number(startYear)
    endYear = Number(endYear)

    for (let year = startYear; year <= endYear; year += 4) {
        console.log(year)
    }
}
