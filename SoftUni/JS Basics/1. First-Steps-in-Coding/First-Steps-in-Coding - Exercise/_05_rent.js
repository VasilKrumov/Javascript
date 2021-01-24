function rent(rent) {
  rent = Number(rent);

  const cakePrice = rent * 0.2;
  const drinksPrice = cakePrice - cakePrice * 0.45;
  const animatorPrice = (rent * 1) / 3;

  const totalPrice = rent + cakePrice + drinksPrice + animatorPrice;
  console.log(totalPrice);
}
