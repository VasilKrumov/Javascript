function vacation(input) {
  let index = 0;
  const moneyNeeded = Number(input[index++]);
  let savedMoney = Number(input[index++]);

  let days = 0;
  let spendingDays = 0;

  while (savedMoney < moneyNeeded) {
    const action = input[index++];
    const money = Number(input[index++]);
    days++;

    if (action === 'spend') {
      if (savedMoney < money) {
        savedMoney = 0;
      } else {
        savedMoney -= money;
      }
      spendingDays++;

      if (spendingDays === 5) {
        break;
      }
    } else {
      spendingDays = 0;
      savedMoney += money;
    }
  }
  if (spendingDays === 5) {
    console.log(`You can't save the money.`);
    console.log(days);
  } else {
    console.log(`You saved the money for ${days} days.`);
  }
}
