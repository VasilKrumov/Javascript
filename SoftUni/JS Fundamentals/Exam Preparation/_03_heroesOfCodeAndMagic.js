function heroesOfCodeAndMagic(input) {
    const heroes = {}
    const n = Number(input.shift())

    function castSpell(heroes, heroName, mpNeeded, spellName) {
        mpNeeded = Number(mpNeeded)
        const hero = heroes[heroName]

        if (hero.mp >= mpNeeded) {
            hero.mp -= mpNeeded
            return `${heroName} has successfully cast ${spellName} and now has ${hero.mp} MP!`
        }

        return `${heroName} does not have enough MP to cast ${spellName}!`
    }

    function takeDamage(heroes, heroName, damage, attacker) {
        damage = Number(damage)
        const hero = heroes[heroName]
        hero.hp -= damage

        if (hero.hp > 0) {
            return `${heroName} was hit for ${damage} HP by ${attacker} and now has ${hero.hp} HP left!`
        }

        delete heroes[heroName]

        return `${heroName} has been killed by ${attacker}!`
    }

    function recharge(heroes, heroName, amount) {
        amount = Number(amount)
        const hero = heroes[heroName]
        const oldValue = hero.mp
        hero.mp = Math.min(200, hero.mp + amount)

        return `${heroName} recharged for ${hero.mp - oldValue} MP!`
    }

    function heal(heroes, heroName, amount) {
        amount = Number(amount)
        const hero = heroes[heroName]
        const oldValue = hero.hp
        hero.hp = Math.min(100, hero.hp + amount)

        return `${heroName} healed for ${hero.hp - oldValue} HP!`
    }

    input.splice(0, n).forEach((line) => {
        let [heroName, hp, mp] = line.split(' ')
        hp = Number(hp)
        mp = Number(mp)

        heroes[heroName] = { hp, mp }
    })

    input.forEach((line) => {
        const [command, ...tokens] = line.split(' - ')
        let output

        if (command !== 'End') {
            if (command === 'CastSpell') {
                output = castSpell(heroes, ...tokens)
            } else if (command === 'Recharge') {
                output = recharge(heroes, ...tokens)
            } else if (command === 'TakeDamage') {
                output = takeDamage(heroes, ...tokens)
            } else if (command === 'Heal') {
                output = heal(heroes, ...tokens)
            }

            console.log(output)
        }
    })

    function compareHeroes(a, b) {
        const [aName, aInfo] = a
        const [bName, bInfo] = b

        // numbers Ascending => a - b
        // numbers descending => b - a
        // alphabetical => a.localCompare(b)

        const byHealthDescending = bInfo.hp - aInfo.hp

        if (byHealthDescending === 0) {
            return aName.localeCompare(bName)
        }

        // return bInfo.hp - aInfo.hp || aName.localeComapre(bName)
    }

    const sortedHeroes = Object.entries(heroes).sort(compareHeroes)

    for (const [heroName, heroInfo] of sortedHeroes) {
        const { hp, mp } = heroInfo

        console.log(heroName)
        console.log(`  HP: ${hp}`)
        console.log(`  MP: ${mp}`)
    }
}

// heroesOfCodeAndMagic([
//     '2',
//     'Solmyr 85 120',
//     'Kyrre 99 50',
//     'Heal - Solmyr - 10',
//     'Recharge - Solmyr - 50',
//     'TakeDamage - Kyrre - 66 - Orc',
//     'CastSpell - Kyrre - 15 - ViewEarth',
//     'End'
//   ])
