function users(arr = []) {
    const users = {}

    arr.forEach((el) => {
        const [company, uid] = el.split(' -> ')
        if (!users[company]) {
            users[company] = new Set()
        }

        users[company].add(uid)
    })

    Object.keys(users)
        .sort((a, b) => a.localeCompare(b))
        .forEach((companyKey) => {
            console.log(companyKey)
            users[companyKey].forEach((uid) => console.log(`-- ${uid}`))
        })
}
