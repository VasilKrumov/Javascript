function passwordGuess(input) {
  const username = input[0];
  const password = input[1];
  let data = input[2];
  let index = 3;
  while (data !== password) {
    data = input[index];
    index++;
  }
  console.log(`Welcome ${username}!`);
}
