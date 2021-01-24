function numbersPyramid(input) {
  const n = Number(input.shift());
  let times = 1;
  let counter = 2;
  let output = '1\n';

  while (counter <= n) {
    const end = counter + times;
    for (let i = counter; i <= (end < n ? end : n); i++) {
      output += `${i} `;
    }
    output += '\n';
    counter += 1 + times++;
  }

  console.log(output);
}
