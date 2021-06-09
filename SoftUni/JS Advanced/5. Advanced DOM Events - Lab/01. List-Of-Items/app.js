function addItem() {
    const newItemTextElement = document.getElementById('newItemText')
    const listElement = document.getElementById('items')
    const listItemElement = document.createElement('li')
    listItemElement.textContent = newItemTextElement.value
    listElement.appendChild(listItemElement)
}