function programmingBook(
  pricePage,
  priceCover,
  percentDiscount,
  designerCost,
  percentTeam
) {
  pricePage = Number(pricePage);
  priceCover = Number(priceCover);
  percentDiscount = Number(percentDiscount);
  designerCost = Number(designerCost);
  percentTeam = Number(percentTeam);

  const rawCosts = pricePage * 899 + 2 * priceCover;

  const discountedCost = rawCosts - (rawCosts * percentDiscount) / 100;

  const total = discountedCost + designerCost;
  const totalDiscounted = total - (total * percentTeam) / 100;

  console.log(`Avtonom should pay ${totalDiscounted.toFixed(2)} BGN.`);
}

programmingBook(0.01, 1, 10, 20, 20);
