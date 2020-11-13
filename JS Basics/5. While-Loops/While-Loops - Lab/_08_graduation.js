function graduation(arr) {
  const name = arr[0];
  let index = 1;
  let average = 0;
  let sum = 0;
  let grade = 1;
  let repeat = 0;

  while (index < arr.length) {
    arr[index] = Number(arr[index]);
    if (arr[index] < 4) {
      index++;
      repeat += 1;
      if (repeat === 2) {
        console.log(`${name} has been excluded at ${grade} grade`);
        return;
      }
      continue;
    } else {
      grade++;
      sum += arr[index];
      index++;
    }
  }

  average = sum / 12;
  console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
}
