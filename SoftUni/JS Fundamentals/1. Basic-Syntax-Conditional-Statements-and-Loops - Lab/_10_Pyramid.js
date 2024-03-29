function thePyramid(base = 1, increment = 1) {
  let stone = (marble = lapis = gold = row = 0);
  // let [stone, marble, lapis, gold, row] = new Array(5).fill(0);

  while (base > 2) {
    const requiredMarbel = base * 4 - 4;
    const requiredStone = base * base - requiredMarbel;
    stone += requiredStone;

    if (++row % 5 === 0) {
      lapis += requiredMarbel;
    } else {
      marble += requiredMarbel;
    }
    base -= 2;
  }

  console.log(
    `Stone required: ${Math.ceil(stone * increment)}` +
      `\nMarble required: ${Math.ceil(marble * increment)}` +
      `\nLapis Lazuli required: ${Math.ceil(lapis * increment)}` +
      `\nGold required: ${Math.ceil(base * base * increment)}` +
      `\nFinal pyramid height: ${Math.floor(++row * increment)}`
  );
}
