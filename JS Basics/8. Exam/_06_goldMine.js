function goldCalculator(input) {
  const data = input.map(Number);

  const daysData = data.splice(1);
  const goldData = [];

  while (daysData.length) {
    const avg = daysData[0];
    const days = daysData[1];
    daysData.splice(0, 2);
    const gold = daysData.splice(0, days);
    goldData.push({
      avg,
      days,
      gold,
    });
  }
  goldData.forEach((dayData) => {
    const goldGained = dayData.gold.reduce((a, b) => a + b, 0);
    const avgGoldGained = goldGained / dayData.days;
    if (avgGoldGained >= dayData.avg) {
      console.log(
        `Good job! Average gold per day: ${avgGoldGained.toFixed(2)}.`
      );
    } else {
      const goldNeeded = dayData.avg - avgGoldGained;
      console.log(`You need ${goldNeeded.toFixed(2)} gold.`);
    }
  });
}
