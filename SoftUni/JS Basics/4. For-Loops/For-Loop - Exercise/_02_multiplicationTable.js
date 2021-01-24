function multiplicationTable(multiplier) {
  number = Number(multiplier);
  for (let i = 1; i <= 10; i++) {
    const product = i * multiplier;
    console.log(`${i} * ${multiplier} = ${product}`);
  }
}
