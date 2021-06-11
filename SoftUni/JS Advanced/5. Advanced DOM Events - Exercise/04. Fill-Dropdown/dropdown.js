function addItem() {
    const textInput = document.getElementById('newItemText')
    const valueInput = document.getElementById('newItemValue')
    const selectMenu = document.getElementById('menu')

    const newOption = document.createElement('option')
    newOption.textContent = textInput.value
    newOption.setAttribute('value', valueInput.value)
    selectMenu.appendChild(newOption)

    textInput.value = ''
    valueInput.value = ''
}
