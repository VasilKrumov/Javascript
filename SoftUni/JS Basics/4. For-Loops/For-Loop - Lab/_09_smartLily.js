function smartLily(age, washerPrice, toyPrice) {
  age = Number(age);
  washerPrice = Number(washerPrice);
  toyPrice = Number(toyPrice);

  let sum = 0;
  let toyCount = 0;
  let moneyCount = 0;
  let moneyPerBd = 10;

  for (let i = 1; i <= age; i++) {
    if (i % 2 === 0) {
      moneyCount += moneyPerBd;
      moneyCount -= 1;
      moneyPerBd += 10;
    } else {
      toyCount++;
    }
  }

  sum = toyCount * toyPrice + moneyCount;

  if (sum >= washerPrice) {
    console.log(`Yes! ${(sum - washerPrice).toFixed(2)}`);
  } else {
    console.log(`No! ${(washerPrice - sum).toFixed(2)}`);
  }
}
