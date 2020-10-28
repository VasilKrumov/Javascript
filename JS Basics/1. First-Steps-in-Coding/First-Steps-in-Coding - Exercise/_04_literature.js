function literature(pages, hourPages, days) {
    const nPages = Number(pages)
    const nHourPages = Number(hourPages)
    const nDays = Number(days)

    const totalTimeToBook = nPages / nHourPages
    const totalDaysToBook = totalTimeToBook / nDays

    console.log(totalDaysToBook)
}
