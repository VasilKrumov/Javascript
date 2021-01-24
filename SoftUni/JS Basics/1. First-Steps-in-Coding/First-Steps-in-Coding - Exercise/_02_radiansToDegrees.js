function radiansToDegrees(input) {
  const radians = Number(input);
  const degrees = (radians * 180) / Math.PI;
  console.log(degrees.toFixed(0));
}
