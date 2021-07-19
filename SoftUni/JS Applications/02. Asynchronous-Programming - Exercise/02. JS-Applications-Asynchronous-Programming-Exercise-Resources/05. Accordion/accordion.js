function solution() {
    getKey()
}
solution()

async function getKey() {
    const section = document.getElementById('main')
    const url = `http://localhost:3030/jsonstore/advanced/articles/list`
    const response = await fetch(url)
    const data = await response.json()

    Object.values(data)
        .map(makeElements)
        .forEach((el) => section.appendChild(el))
}

function makeElements({ _id, title }) {
    let div = el('div', undefined, 'accordion')
    let div2 = el('div', undefined, 'head')
    let span = el('span', title)
    let btn = el('button', 'More', 'button', _id)
    btn.addEventListener('click', (e) => showMore(e, p, extradiv, _id))
    div2.appendChild(span)
    div2.appendChild(btn)
    div.appendChild(div2)

    const extradiv = el('div', undefined, 'extra')
    const p = el('p')
    extradiv.appendChild(p)
    div.appendChild(extradiv)

    return div
}

function el(type, content, className, id) {
    let result = document.createElement(type)

    if (content) {
        result.textContent = content
    }

    if (className) {
        result.className = className
    }

    if (id) {
        result.id = id
    }

    return result
}

async function showMore(e, p, extradiv, id) {
    const url = `http://localhost:3030/jsonstore/advanced/articles/details/` + id

    const response = await fetch(url)
    const data = await response.json()

    p.textContent = data.content
    if (e.target.textContent == 'More') {
        e.target.textContent = 'Less'
        extradiv.style.display = 'flex'
    } else {
        e.target.textContent = 'More'
        extradiv.style.display = 'none'
    }
}
