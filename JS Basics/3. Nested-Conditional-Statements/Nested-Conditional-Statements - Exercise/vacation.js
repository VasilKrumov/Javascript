function vacation(budget, season) {
  budget = Number(budget);
  let destination = 'Bulgaria' | 'Balkans' | 'Europe';
  let vacationType = 'Hotel' | 'Camp';
  let totalCost = 0;

  if (budget <= 100) {
    destination = 'Bulgaria';
    if (season === 'summer') {
      totalCost = budget * 0.3;
      vacationType = 'Camp';
    } else if (season === 'winter') {
      totalCost = budget * 0.7;
      vacationType = 'Hotel';
    }
  } else if (budget <= 1000) {
    destination = 'Balkans';
    if (season === 'summer') {
      totalCost = budget * 0.4;
      vacationType = 'Camp';
    } else if (season === 'winter') {
      totalCost = budget * 0.8;
      vacationType = 'Hotel';
    }
  } else if (budget > 1000) {
    destination = 'Europe';
    vacationType = 'Hotel';
    totalCost = budget * 0.9;
  }

  console.log(`Somewhere in ${destination}`);
  console.log(`${vacationType} - ${totalCost.toFixed(2)}`);
}
