function solve() {
    const span = document.querySelector('span[class="info"]')
    const departBtn = document.getElementById('depart')
    const arriveBtn = document.getElementById('arrive')

    let stop = {
        next: 'depot',
    }
    async function depart() {
        let url = `http://localhost:3030/jsonstore/bus/schedule/` + stop.next
        const response = await fetch(url)
        const data = await response.json()

        stop = data
        span.textContent = `Next stop ${stop.name}`
        departBtn.disabled = true
        arriveBtn.disabled = false
    }

    function arrive() {
        span.textContent = `Arriving at ${stop.name}`
        departBtn.disabled = false
        arriveBtn.disabled = true
    }

    return {
        depart,
        arrive,
    }
}
