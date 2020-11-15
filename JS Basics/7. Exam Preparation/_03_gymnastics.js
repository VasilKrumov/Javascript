function gymnastics(country, instrument) {
  let difficultyPoints = 0;
  let runPoints = 0;
  let totalPoints = 0;
  let percent = 0;

  switch (country) {
    case 'Russia':
      switch (instrument) {
        case 'ribbon':
          difficultyPoints = 9.1;
          runPoints = 9.4;
          break;

        case 'hoop':
          difficultyPoints = 9.3;
          runPoints = 9.8;
          break;

        case 'rope':
          difficultyPoints = 9.6;
          runPoints = 9;
          break;

        default:
          break;
      }
      break;
    case 'Bulgaria':
      switch (instrument) {
        case 'ribbon':
          difficultyPoints = 9.6;
          runPoints = 9.4;
          break;

        case 'hoop':
          difficultyPoints = 9.55;
          runPoints = 9.75;
          break;

        case 'rope':
          difficultyPoints = 9.5;
          runPoints = 9.4;
          break;

        default:
          break;
      }
      break;

    case 'Italy':
      switch (instrument) {
        case 'ribbon':
          difficultyPoints = 9.2;
          runPoints = 9.5;
          break;

        case 'hoop':
          difficultyPoints = 9.45;
          runPoints = 9.35;
          break;

        case 'rope':
          difficultyPoints = 9.7;
          runPoints = 9.15;
          break;

        default:
          break;
      }
      break;

    default:
      break;
  }
  totalPoints = difficultyPoints + runPoints;
  percent = ((20 - totalPoints) / 20) * 100;

  console.log(
    `The team of ${country} get ${totalPoints.toFixed(3)} on ${instrument}.`
  );
  console.log(`${percent.toFixed(2)}%`);
}
