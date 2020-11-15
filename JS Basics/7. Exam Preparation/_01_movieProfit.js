function movieProfitFn(movieName, days, ticketsCount, ticketPrice, percent) {
  days = Number(days);
  ticketsCount = Number(ticketsCount);
  ticketPrice = Number(ticketPrice);
  percent = Number(percent);

  const sumForDay = ticketsCount * ticketPrice;
  const totalSum = sumForDay * days;
  const cinemaProfit = totalSum * (percent / 100);
  const movieProfit = totalSum - cinemaProfit;

  console.log(
    `The profit from the movie ${movieName} is ${movieProfit.toFixed(2)} lv.`
  );
}

movieProfitFn(['The Programmer', 20, 500, 7.5, 7]);
