function toggle() {
    // Select Elements
    const buttonElement = document.querySelector('.button')
    const toggledTextElement = document.getElementById('extra')

    // Show/Hide text and change button text
    buttonElement.textContent = buttonElement.textContent === 'More' ? 'Less' : 'More'
    toggledTextElement.style.display = toggledTextElement.style.display === 'block' ? 'none' : 'block'
}
