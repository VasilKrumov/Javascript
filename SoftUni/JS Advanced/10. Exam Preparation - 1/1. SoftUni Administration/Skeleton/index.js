function solve() {
    const formControls = document.querySelectorAll('.form-control input')
    const lecture = formControls[0]
    const date = formControls[1]
    const moduleName = document.querySelector('select')
    const modulesOutput = document.querySelector('.modules')
    const state = {}

    function createElement(type, text, attr) {
        const result = document.createElement(type)

        if (text) {
            result.textContent = text
        }

        if (attr) {
            result.className = attr
        }
        return result
    }

    function add(e) {
        e.preventDefault()
        if (lecture.value === '' || date.value === '' || moduleName.value.includes('Select')) {
            return
        }

        const lectureName = lecture.value
        const dateString = date.value
        const lectureTitle = `${lectureName} - ${dateString.split('-').join('/').split('T').join(' - ')}`
        const delBtn = createElement('button', 'Del', 'red')
        const lectureH4 = createElement('h4', lectureTitle)
        const li = createElement('li', undefined, 'flex')
        li.appendChild(lectureH4)
        li.appendChild(delBtn)

        let module
        let ul
        if (!state[moduleName.value]) {
            const h3 = createElement('h3', `${moduleName.value.toUpperCase()}-MODULE`)
            ul = createElement('ul')
            lis = []
            module = createElement('div', undefined, 'module')
            module.appendChild(h3)
            module.appendChild(ul)
            state[moduleName.value] = { module, ul, lis: [] }
        } else {
            module = state[moduleName.value].module
            ul = state[moduleName.value].ul
        }

        state[moduleName.value].lis.push({ li, date: date.value })
        state[moduleName.value].lis
            .sort((a, b) => a.date.localeCompare(b.date))
            .forEach(({ li }) => {
                ul.appendChild(li)
            })

        modulesOutput.appendChild(module)
    }

    function del(e) {
        const li = e.target.parentNode
        const ul = li.parentNode
        const module = ul.parentNode

        li.remove()
        if (ul.children.length === 0) {
            module.remove()
        }
    }

    document.getElementsByTagName('main')[0].addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            if (!e.target.classList.contains('red')) {
                add(e)
            } else {
                del(e)
            }
        }
    })
}
