function attachEvents() {
    const getWeatherButton = document.getElementById('submit')
    getWeatherButton.addEventListener('click', getWeather)
}

let state = {
    obj: [],
}
attachEvents()

async function getWeather() {
    const location = document.getElementById('location')
    const cityName = location.value

    const code = await getCityCode(cityName)

    const [current, upcoming] = await Promise.all([await getCurrent(code), await getUpcoming(code)])
    const forecast = document.getElementById('forecast')
    const currentConditions = document.querySelector('#current')
    const upcomingConditions = document.querySelector('#upcoming')

    currentConditions.innerHTML = ''
    upcomingConditions.innerHTML = ''
    state = {
        obj: [],
    }
    forecast.style = 'display:block'
    console.log(current, upcoming)

    const div = document.createElement('div')
    div.className = 'forecasts'

    const divlabel = document.createElement('div')
    divlabel.className = 'label'
    divlabel.textContent = 'Current conditions'

    const span1 = document.createElement('span')
    span1.className = 'condition symbol'

    const span2 = document.createElement('span')
    span2.className = 'condition'

    const span3 = document.createElement('span')
    span3.className = 'forecast-data'
    span3.textContent = current.name

    const span4 = document.createElement('span')
    span4.className = 'forecast-data'
    span4.textContent = `${current.forecast.low}°/${current.forecast.high}°`

    const span5 = document.createElement('span')
    span5.className = 'forecast-data'
    span5.textContent = `${current.forecast.condition}`

    span1.textContent = weatherIcon(current.forecast.condition)

    div.appendChild(span1)
    div.appendChild(span2)
    span2.appendChild(span3)
    span2.appendChild(span4)
    span2.appendChild(span5)
    currentConditions.appendChild(divlabel)
    currentConditions.appendChild(div)
    appendForecast(upcoming.forecast[0], upcomingConditions, 'day1')
    appendForecast(upcoming.forecast[1], upcomingConditions, 'day2')
    appendForecast(upcoming.forecast[2], upcomingConditions, 'day3')
}

function appendForecast(obj, upcomingConditions, day) {
    if (state.obj.length === 0) {
        const upcomingDiv = document.createElement('div')
        upcomingDiv.className = 'label'
        upcomingDiv.textContent = 'Three-day forecast'

        const upcomingDiv2 = document.createElement('div')
        upcomingDiv2.className = 'forecast-info'

        const upcomingSpan1 = document.createElement('span')
        upcomingSpan1.className = 'upcoming'

        const upcomingSpan2 = document.createElement('span')
        upcomingSpan2.className = 'symbol'
        upcomingSpan2.textContent = weatherIcon(obj.condition)

        const upcomingSpan3 = document.createElement('span')
        upcomingSpan3.className = 'forecast-data'
        upcomingSpan3.textContent = `${obj.low}°/${obj.high}°`

        const upcomingSpan4 = document.createElement('span')
        upcomingSpan4.className = 'forecast-data'
        upcomingSpan4.textContent = `${obj.condition}`

        upcomingConditions.appendChild(upcomingDiv)
        upcomingSpan1.appendChild(upcomingSpan2)
        upcomingSpan1.appendChild(upcomingSpan3)
        upcomingSpan1.appendChild(upcomingSpan4)
        upcomingDiv2.appendChild(upcomingSpan1)
        upcomingConditions.appendChild(upcomingDiv2)

        state.obj = [day]
    } else {
        const div2 = document.querySelector('div[class="forecast-info"]')
        const upcomingSpan1 = document.createElement('span')
        upcomingSpan1.className = 'upcoming'

        const upcomingSpan2 = document.createElement('span')
        upcomingSpan2.className = 'symbol'
        upcomingSpan2.textContent = weatherIcon(obj.condition)

        const upcomingSpan3 = document.createElement('span')
        upcomingSpan3.className = 'forecast-data'
        upcomingSpan3.textContent = `${obj.low}°/${obj.high}°`

        const upcomingSpan4 = document.createElement('span')
        upcomingSpan4.className = 'forecast-data'
        upcomingSpan4.textContent = `${obj.condition}`

        upcomingSpan1.appendChild(upcomingSpan2)
        upcomingSpan1.appendChild(upcomingSpan3)
        upcomingSpan1.appendChild(upcomingSpan4)
        div2.appendChild(upcomingSpan1)
        state.obj.push(day)
    }
}

function weatherIcon(weather) {
    if (weather === 'Sunny') {
        return '☀'
    } else if (weather === 'Partly sunny') {
        return '⛅'
    } else if (weather === 'Overcast') {
        return '☁'
    } else if (weather === 'Rain') {
        return '☂'
    }
}

async function getCityCode(cityName) {
    let url = `http://localhost:3030/jsonstore/forecaster/locations`

    const response = await fetch(url)
    const data = await response.json()

    return data.find((x) => x.name.toLowerCase() == cityName.toLowerCase()).code
}

async function getCurrent(code) {
    let url = `http://localhost:3030/jsonstore/forecaster/today/` + code

    const response = await fetch(url)
    const data = await response.json()

    return data
}

async function getUpcoming(code) {
    let url = `http://localhost:3030/jsonstore/forecaster/upcoming/` + code

    const response = await fetch(url)
    const data = await response.json()

    return data
}
