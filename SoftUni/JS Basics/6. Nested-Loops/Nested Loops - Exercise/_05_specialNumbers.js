/* eslint-disable */
function specialNumbers(input) {
  const N = +input.shift();
  let out = '';
  Outer: for (let i = 1111; i < 10000; i++) {
    const l = `${i}`;
    for (let j = 0; j < 4; j++) {
      if (N % Number(l[j]) != 0) continue Outer;
    }
    out += `${i} `;
  }
  console.log(out);
}
