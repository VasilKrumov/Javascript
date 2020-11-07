function volleyball(type, p, h) {
  p = Number(p);
  h = Number(h);

  const sofiaGames = ((48 - h) * 3) / 4;
  const homeGames = h;
  const holidayGames = p * (2 / 3);
  const isLeap = type === 'leap';
  let totalGames = sofiaGames + homeGames + holidayGames;

  if (isLeap) {
    totalGames *= 1.15;
  }
  console.log(Math.floor(totalGames));
}
