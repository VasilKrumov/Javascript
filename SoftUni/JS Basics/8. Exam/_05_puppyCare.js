function puppyCare(array) {
  const dogFood = Number(array[0]);
  const totalDogFood = dogFood * 1000;
  let usedFood = 0;

  for (let index = 1; index <= array.length - 1; index++) {
    if (array[index] === 'Adopted') {
      if (usedFood <= totalDogFood) {
        console.log(
          `Food is enough! Leftovers: ${Math.abs(
            usedFood - totalDogFood
          )} grams.`
        );
      } else {
        console.log(
          `Food is not enough. You need ${Math.abs(
            usedFood - totalDogFood
          )} grams more.`
        );
      }
      break;
    } else {
      usedFood += Number(array[index]);
    }
  }
}

puppyCare([2, 999, 456, 999, 999, 123, 456, 'Adopted']);
