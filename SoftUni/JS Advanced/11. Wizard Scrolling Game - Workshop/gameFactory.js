function gameFactory() {
    const { wizard, bugStats, fireballStats } = state

    const startScreen = document.querySelector('.start-screen')
    const playScreen = document.querySelector('.play-screen')
    const scoreScreen = document.querySelector('.score-screen')
    const wizardElement = createWizard(wizard.x, wizard.y)

    playScreen.appendChild(wizardElement)

    const factory = {
        startScreen,
        playScreen,
        scoreScreen,
        wizardElement,
        createBug: () => {
            const bugElement = document.createElement('div')

            bugElement.classList.add('bug')
            bugElement.style.width = `${bugStats.width}px`
            bugElement.style.height = `${bugStats.height}px`

            bugElement.style.left = `${playScreen.offsetWidth - bugStats.width}px`
            bugElement.style.top = `${(playScreen.offsetHeight - bugStats.height) * Math.random()}px`

            playScreen.appendChild(bugElement)
        },
        createFireball: () => {
            const fireballElement = document.createElement('div')

            fireballElement.classList.add('fireball')
            fireballElement.style.width = `${fireballStats.width}px`
            fireballElement.style.height = `${fireballStats.height}px`

            fireballElement.style.left = `${wizard.x}px`
            fireballElement.style.top = `${wizard.y}px`

            playScreen.appendChild(fireballElement)
        },
    }

    return factory
}

function createWizard(posX, posY) {
    const wizardElement = document.createElement('div')
    wizardElement.classList.add('wizard')
    wizardElement.style.top = `${posY}px`
    wizardElement.style.left = `${posX}px`

    return wizardElement
}
