function minNumber(input) {
  const numberOfNumbers = Number(input[0]);
  const lowestNumberArray = [];

  for (let index = 1; index < input.length; index++) {
    lowestNumberArray.push(Number(input[index]));
  }
  console.log(Math.min(...lowestNumberArray));
}
