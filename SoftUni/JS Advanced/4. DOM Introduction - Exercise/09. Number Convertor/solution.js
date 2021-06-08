function numberConvertor() {
    // eslint-disable-next-line no-use-before-define
    const button = document.querySelector('button').addEventListener('click', onClick)
    const option2 = document.querySelector('#selectMenuTo')

    const val1 = document.createElement('option')
    val1.textContent = 'Binary'
    val1.value = 'binary'
    const val2 = document.createElement('option')
    val2.textContent = 'Hexadeicmal'
    val2.value = 'hexadeicmal'
    option2.appendChild(val2)
    option2.appendChild(val1)

    function onClick() {
        const input = Number(document.getElementById('input').value)

        if (option2.value === 'binary') {
            document.querySelector('footer input').value = input.toString(2)
        } else {
            document.querySelector('footer input').value = input.toString(16).toUpperCase()
        }
    }
}
