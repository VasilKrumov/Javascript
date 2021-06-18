function validate() {
    let input = document.getElementById('email')
    let pattern = /^\w+@\w+.\w+$/g
    input.addEventListener('change', (e) => {
        if (!pattern.test(input.value)) {
            input.classList.add('error')
        } else {
            input.removeAttribute('class')
        }
    })
}
