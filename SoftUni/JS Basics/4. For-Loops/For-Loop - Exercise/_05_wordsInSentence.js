function wordsInSentance(text) {
  let words = 0;

  for (let index = 0; index < text.length; index++) {
    const current = text[index];

    if (current === ' ') {
      words++;
    }
  }

  words++;

  if (words > 10) {
    console.log(`The message is too long to be send! Has ${words} words.
        `);
  } else {
    console.log('The message was send successfully!');
  }
}
