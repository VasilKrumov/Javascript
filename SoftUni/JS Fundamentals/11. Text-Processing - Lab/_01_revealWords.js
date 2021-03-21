function revealWords(words, templates) {
    words = words.split(', ')

    for (const word of words) {
        const starsTemp = '*'.repeat(word.length)
        templates = templates.replace(starsTemp, word)
    }

    console.log(templates)
}

revealWords('great, learning', 'softuni is ***** place for ******** new programming languages')
