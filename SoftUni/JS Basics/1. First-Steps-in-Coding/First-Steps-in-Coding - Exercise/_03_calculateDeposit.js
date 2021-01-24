function calculateDeposit(depositedSum, depositedTime, annualPercent) {
  const sum = Number(depositedSum);
  const time = Number(depositedTime);
  const percentageIncrease = Number(annualPercent) / 100;

  const totalIncrease = sum * percentageIncrease;
  const monthlyIncrease = totalIncrease / 12;

  const endResult = sum + time * monthlyIncrease;

  console.log(endResult);
}
