function calc() {
    const firstNum = document.querySelector('#num1')
    const secondNum = document.querySelector('#num2')
    const result = document.querySelector('#sum')

    result.value = Number(firstNum.value) + Number(secondNum.value)
}
