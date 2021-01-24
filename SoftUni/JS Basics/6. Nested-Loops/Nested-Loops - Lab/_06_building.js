function buildings(arr) {
  for (let i = Number(arr[0]); i > 0; i--) {
    let result = '';
    for (let j = 0; j < Number(arr[1]); j++) {
      let letter;
      if (i === Number(arr[0])) {
        letter = 'L';
      } else if (i % 2 === 0) {
        letter = 'O';
      } else {
        letter = 'A';
      }
      result += `${letter}${i}${j} `;
    }
    console.log(result);
  }
}
