function isValid(num) {
  num = Number(num);
  const isValid = (num >= 100 && num <= 200) || num === 0;

  if (!isValid) {
    console.log('invalid');
  }
}
