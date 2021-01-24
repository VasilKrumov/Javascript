/* eslint-disable */
function twoNumbers(input) {
  const start = Number(input.shift());
  const end = Number(input.shift());
  const magic = Number(input.shift());

  let counter = 0;
  let num = 0;
  Outer: for (let i = start; i <= end; i++) {
    for (let j = start; j <= end; j++) {
      counter++;
      num = i + j;
      if (num == magic) {
        console.log(`Combination N:${counter} (${i} + ${j} = ${magic})`);
        break Outer;
      }
    }
  }
  if (num != magic)
    console.log(`${counter} combinations - neither equals ${magic}`);
}
