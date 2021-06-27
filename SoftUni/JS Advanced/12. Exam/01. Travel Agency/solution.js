/* eslint-disable array-callback-return */
// eslint-disable-next-line no-use-before-define
window.addEventListener('load', solution)
function solution() {
    // Buttons
    const submitBtn = document.getElementById('submitBTN')
    const editBtn = document.getElementById('editBTN')
    const continueBtn = document.getElementById('continueBTN')

    // Inputs

    const nameInput = document.getElementById('fname')
    const emailInput = document.getElementById('email')
    const phoneInput = document.getElementById('phone')
    const addressInput = document.getElementById('address')
    const codeInput = document.getElementById('code')

    // Preview & Block Div

    const previewUl = document.getElementById('infoPreview')
    const blockDiv = document.getElementById('block')

    // Helper Functions

    function clearInputs() {
        nameInput.value = ''
        emailInput.value = ''
        phoneInput.value = ''
        addressInput.value = ''
        codeInput.value = ''
    }

    function validateInputs(...inputs) {
        return inputs.every((input) => input.value !== '')
    }

    // Helper Object

    const previousInputs = {
        name: '',
        email: '',
        phone: '',
        address: '',
        code: '',
    }

    // Event Listeners

    submitBtn.addEventListener('click', function (e) {
        e.preventDefault()

        if (validateInputs(nameInput, emailInput)) {
            submitBtn.disabled = true
            editBtn.disabled = false
            continueBtn.disabled = false
            if (nameInput.value !== '') {
                const li = document.createElement('li')
                li.textContent = `Full Name: ${nameInput.value}`
                previewUl.appendChild(li)
                previousInputs.name = nameInput.value
            }
            if (emailInput.value !== '') {
                const li = document.createElement('li')
                li.textContent = `Email: ${emailInput.value}`
                previewUl.appendChild(li)
                previousInputs.email = emailInput.value
            }
            if (phoneInput.value !== '') {
                const li = document.createElement('li')
                li.textContent = `Phone Number: ${phoneInput.value}`
                previewUl.appendChild(li)
                previousInputs.phone = phoneInput.value
            }
            if (addressInput.value !== '') {
                const li = document.createElement('li')
                li.textContent = `Address: ${addressInput.value}`
                previewUl.appendChild(li)
                previousInputs.address = addressInput.value
            }
            if (codeInput.value !== '') {
                const li = document.createElement('li')
                li.textContent = `Postal Code: ${codeInput.value}`
                previewUl.appendChild(li)
                previousInputs.code = codeInput.value
            }
            clearInputs()
        }
    })

    editBtn.addEventListener('click', function (e) {
        e.preventDefault()
        nameInput.value = previousInputs.name
        emailInput.value = previousInputs.email
        phoneInput.value = previousInputs.phone
        addressInput.value = previousInputs.address
        codeInput.value = previousInputs.code

        previewUl.innerHTML = ''

        submitBtn.disabled = false
        editBtn.disabled = true
        continueBtn.disabled = true
    })

    continueBtn.addEventListener('click', function (e) {
        e.preventDefault()
        clearInputs()
        const successMessage = `<h3>Thank you for your reservation!</h3>`
        blockDiv.innerHTML = successMessage
    })
}
