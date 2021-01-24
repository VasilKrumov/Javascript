function hotelRoom(month, nights) {
  nights = Number(nights);

  let studioPrice;
  let apartamentPrice;

  switch (month) {
    case 'May':
    case 'October':
      studioPrice = 50 * nights;
      apartamentPrice = 65 * nights;
      if (nights > 14) {
        studioPrice *= 0.7;
      } else if (nights > 7) {
        studioPrice *= 0.95;
      }
      break;
    case 'June':
    case 'September':
      studioPrice = 75.2 * nights;
      apartamentPrice = 68.7 * nights;
      if (nights > 14) {
        studioPrice *= 0.8;
      }
      break;
    case 'July':
    case 'August':
      studioPrice = 76 * nights;
      apartamentPrice = 77 * nights;
      break;
  }
  if (nights > 14) {
    apartamentPrice *= 0.9;
  }

  console.log(`Apartment: ${apartamentPrice.toFixed(2)} lv.`);
  console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}
