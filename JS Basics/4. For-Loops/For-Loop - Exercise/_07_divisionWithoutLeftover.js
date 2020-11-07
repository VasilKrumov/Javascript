function divisionWithoutLeftover(input) {
  const n = Number(input[0]);
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;

  for (let i = 1; i < input.length; i++) {
    if (current % 2 === 0) {
      p1++;
    }
    if (current % 3 === 0) {
      p2++;
    }
    if (current % 4 === 0) {
      p3++;
    }
  }

  console.log(`${((p1 / n) * 100).toFixed(2)}%`);
  console.log(`${((p2 / n) * 100).toFixed(2)}%`);
  console.log(`${((p3 / n) * 100).toFixed(2)}%`);
}
