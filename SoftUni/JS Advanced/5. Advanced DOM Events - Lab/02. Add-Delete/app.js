function addItem() {
    const newItemTextElement = document.getElementById('newItemText')
    const listElement = document.getElementById('items')


    const liItemElement = document.createElement('li')
    liItemElement.textContent = newItemTextElement.value

    const deleteButton = document.createElement('a')
    deleteButton.setAttribute('href', '#')
    deleteButton.textContent = '[Delete]'

    deleteButton.addEventListener('click', (e) => {
        e.currentTarget.parentNode.remove()
    })

    liItemElement.appendChild(deleteButton)
    listElement.appendChild(liItemElement)

    newItemTextElement.value = ''
}