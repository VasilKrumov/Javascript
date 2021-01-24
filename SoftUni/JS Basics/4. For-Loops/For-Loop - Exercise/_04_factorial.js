function factorial(num) {
  num = Number(num);
  let factorial = 1;

  for (let multiplier = 2; multiplier <= num; multiplier++) {
    factorial *= multiplier;
  }
  console.log(factorial);
}
