function newHome(flower, flowerCount, budget) {
  flowerCount = Number(flowerCount);
  budget = Number(budget);
  let total = 0;
  let discount = 1;

  if (flower === 'Roses') {
    if (flowerCount > 80) {
      discount = 0.9;
    }
    total = flowerCount * 5 * discount;
  } else if (flower === 'Dahlias') {
    if (flowerCount > 90) {
      discount = 0.85;
    }
    total = flowerCount * 3.8 * discount;
  } else if (flower === 'Tulips') {
    if (flowerCount > 80) {
      discount = 0.85;
    }
    total = flowerCount * 2.8 * discount;
  } else if (flower === 'Narcissus') {
    if (flowerCount < 120) {
      discount = 1.15;
    }
    total = flowerCount * 3 * discount;
  } else if (flower === 'Gladiolus') {
    if (flowerCount < 80) {
      discount = 1.2;
    }
    total = flowerCount * 2.5 * discount;
  }

  if (budget >= total) {
    console.log(
      `Hey, you have a great garden with ${flowerCount} ${flower} and ${(
        budget - total
      ).toFixed(2)} leva left.`
    );
  } else {
    console.log(
      `Not enough money, you need ${(total - budget).toFixed(2)} leva more.`
    );
  }
}
