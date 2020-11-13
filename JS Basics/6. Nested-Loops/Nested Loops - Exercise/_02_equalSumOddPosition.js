function equalSumOddPosition(input) {
  const num1 = Number(input.shift());
  const num2 = Number(input.shift());

  let sumEven = 0;
  let sumOdd = 0;
  let str = '';
  let n = 0;
  let output = '';
  for (let i = num1; i <= num2; i++) {
    sumEven = 0;
    sumOdd = 0;
    str = `${i} `;
    for (let j = 0; j < 6; j++) {
      n = Number(str[j]);
      if (j % 2 === 0) sumEven += n;
      else sumOdd += n;
    }
    if (sumEven === sumOdd) output += str;
  }
  console.log(output);
}
