function giftsFromSanta(arr) {
  const N = Number(arr[0]);
  const M = Number(arr[1]);
  const S = Number(arr[2]);
  let result = '';

  for (let index = M; index >= N; index--) {
    if (index % 2 === 0 && index % 3 === 0) {
      if (index === S) {
        break;
      } else {
        result += `${index} `;
      }
    }
  }
  console.log(result);
}

giftsFromSanta([20, 1000, 36]);
