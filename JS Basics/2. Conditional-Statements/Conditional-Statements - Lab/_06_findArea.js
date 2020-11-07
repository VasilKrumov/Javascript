function findArea(figureType, firstNum, secondNum) {
  let result;

  if (figureType === 'square') {
    result = firstNum * firstNum;
  } else if (figureType === 'rectangle') {
    result = firstNum * secondNum;
  } else if (figureType === 'circle') {
    result = Math.pow(firstNum, 2) * Math.PI;
  } else if (figureType === 'triangle') {
    result = (firstNum * secondNum) / 2;
  }
  console.log(result.toFixed(3));
}
