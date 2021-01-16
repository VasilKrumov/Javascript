function printAndSum(start = 1, end = 1) {
  let output = '';
  let sum = 0;
  for (let i = start; i <= end; i++) {
    output += `${i} `;
    sum += i;
  }

  console.log(`${output}\nSum: ${sum}`);
}
