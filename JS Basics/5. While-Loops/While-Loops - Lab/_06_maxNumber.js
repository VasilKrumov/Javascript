function minNumber(arr) {
  let minNumber = Number(arr[0]);
  let index = 1;

  while (arr[index] !== 'Stop') {
    arr[index] = Number(arr[index]);
    if (minNumber > arr[index]) {
      minNumber = arr[index];
    }
    index++;
  }

  console.log(minNumber);
}
