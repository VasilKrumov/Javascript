function lockedProfile() {}

async function profileData() {
    const url = `http://localhost:3030/jsonstore/advanced/profiles`

    const response = await fetch(url)
    const data = await response.json()

    Object.values(data).map(({ age, email, username, _id }) => {
        makeProfile(age, email, username, _id)
    })
}

function makeProfile(age, email, username, id) {
    const main = document.getElementById('main')
    const div = el('div', undefined, 'profile')
    const img = el('img', undefined, 'userIcon', undefined, './iconProfile2.png')
    const label1 = el('label', 'Lock')
    const input1 = el('input', undefined, undefined, undefined, undefined, 'radio', 'user1Locked', 'lock', ['checked'])
    const label2 = el('label', 'Unlock')
    const input2 = el('input', undefined, undefined, undefined, undefined, 'radio', 'user1Locked', 'unlock')
    const br = el('br')
    const hr = el('hr')
    const label3 = el('label', 'Username')
    const input3 = el('input', undefined, undefined, undefined, undefined, 'text', 'user1Username', `${username}`, [
        'disabled',
        'readonly',
    ])
    const div2 = el('div', undefined, undefined, 'user1HiddenFields')
    const hr2 = el('hr')
    const label4 = el('label', 'Email:')
    const input4 = el('input', undefined, undefined, undefined, undefined, 'email', 'user1Email', `${email}`, [
        'disabled',
        'readonly',
    ])
    const label5 = el('label', 'Age:')
    const input5 = el('input', undefined, undefined, undefined, undefined, 'email', 'user1Age', `${age}`, [
        'disabled',
        'readonly',
    ])
    const button = el('button', 'Show more')
    button.addEventListener('click', (e) => showMore(e))
    div2.appendChild(hr2)
    div2.appendChild(label4)
    div2.appendChild(input4)
    div2.appendChild(label5)
    div2.appendChild(input5)
    div.appendChild(img)
    div.appendChild(label1)
    div.appendChild(input1)
    div.appendChild(label2)
    div.appendChild(input2)
    div.appendChild(br)
    div.appendChild(hr)
    div.appendChild(label3)
    div.appendChild(input3)
    div.appendChild(div2)
    div.appendChild(button)
    main.appendChild(div)
}

function showMore(e) {
    const isLocked = document.querySelector('input[type="radio"]:checked').value === 'lock'
    const profile = e.target.parentNode
    if (isLocked) {
        return
    }

    let div = profile.querySelector('div')
    let isVisible = div.style.display === 'block'
    div.style.display = isVisible ? 'none' : 'block'
    e.target.textContent = !isVisible ? 'Hide it' : 'Show more'
}

function el(type, content, className, id, image, attrType, attrName, val, attr) {
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

    if (image) {
        result.src = image
    }

    if (attrType) {
        result.type = attrType
    }

    if (attrName) {
        result.name = attrName
    }

    if (val) {
        result.value = val
    }

    if (attr) {
        for (let i = 0; i < attr.length; i++) {
            result.addAtribute = attr[i]
        }
    }

    return result
}

profileData()
