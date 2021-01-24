function footballSouvenirs(team, souvenir, numberBought) {
  numberBought = Number(numberBought);
  let flagsPrice;
  let capsPrice;
  let postersPrice;
  let stickersPrice;
  let total = 0;
  switch (team) {
    case 'Argentina':
      switch (souvenir) {
        case 'flags':
          flagsPrice = 3.25;
          break;
        case 'caps':
          capsPrice = 7.2;
          break;
        case 'posters':
          postersPrice = 5.1;
          break;
        case 'stickers':
          stickersPrice = 1.25;
          break;
        default:
          console.log('Invalid stock!');
          return;
      }
      break;

    case 'Brazil':
      switch (souvenir) {
        case 'flags':
          flagsPrice = 4.2;
          break;
        case 'caps':
          capsPrice = 8.5;

          break;
        case 'posters':
          postersPrice = 5.35;
          break;
        case 'stickers':
          stickersPrice = 1.2;
          break;
        default:
          console.log('Invalid stock!');
          return;
      }
      break;

    case 'Croatia':
      switch (souvenir) {
        case 'flags':
          flagsPrice = 2.75;
          break;
        case 'caps':
          capsPrice = 6.9;
          break;
        case 'posters':
          postersPrice = 4.95;
          break;
        case 'stickers':
          stickersPrice = 1.1;
          break;
        default:
          console.log('Invalid stock!');
          return;
      }
      break;

    case 'Denmark':
      switch (souvenir) {
        case 'flags':
          flagsPrice = 3.1;
          break;
        case 'caps':
          capsPrice = 6.5;
          break;
        case 'posters':
          postersPrice = 4.8;
          break;
        case 'stickers':
          stickersPrice = 0.9;
          break;
        default:
          console.log('Invalid stock!');
          return;
      }
      break;

    default:
      console.log('Invalid country!');
      return;
  }
  switch (souvenir) {
    case 'flags':
      total = flagsPrice * numberBought;
      break;
    case 'caps':
      total = capsPrice * numberBought;
      break;
    case 'posters':
      total = postersPrice * numberBought;
      break;
    case 'stickers':
      total = stickersPrice * numberBought;
      break;
    default:
      break;
  }

  console.log(
    `Pepi bought ${numberBought} ${souvenir} of ${team} for ${total.toFixed(
      2
    )} lv.`
  );
}

footballSouvenirs('Brazil', 'stickers', 5);
