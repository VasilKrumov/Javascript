function totalWinnings(tripPrice, jigsaw, dolls, bears, minions, trucks) {
  const jigsawPrice = 2.6;
  const dollsPrices = 3;
  const bearPrice = 4.1;
  const minionPrice = 8.2;
  const trucksPrice = 2;

  const totalCount =
    Number(jigsaw) +
    Number(dolls) +
    Number(bears) +
    Number(minions) +
    Number(trucks);
  let priceMultiplier = 1;

  if (totalCount >= 50) {
    priceMultiplier = 0.75;
  }

  let total =
    jigsaw * Number(jigsawPrice) +
    dolls * Number(dollsPrices) +
    bears * Number(bearPrice) +
    minions * Number(minionPrice) +
    trucks * Number(trucksPrice);

  total *= priceMultiplier;

  const finalMoney = total - total * 0.1;

  tripPrice = Number(tripPrice);

  if (finalMoney >= tripPrice) {
    console.log(`Yes! ${(finalMoney - tripPrice).toFixed(2)} lv left.`);
  } else {
    console.log(
      `Not enough money! ${(tripPrice - finalMoney).toFixed(2)} lv needed.`
    );
  }
}
