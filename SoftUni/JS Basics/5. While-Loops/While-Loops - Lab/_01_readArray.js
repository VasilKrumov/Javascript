function accountBalance(arr) {
  let currentSum = 0;
  let total = 0;

  let index = 0;

  while (arr[index] !== 'NoMoreMoney') {
    arr[index] = Number(arr[index]);
    if (arr[index] > 0) {
      currentSum = arr[index];
      total += currentSum;
      console.log(`Increase: ${currentSum.toFixed(2)}`);
    } else if (arr[index] <= 0) {
      console.log('Invalid operation!');
      break;
    }
    index++;
  }

  console.log(`Total: ${total.toFixed(2)}`);
}
