function skiTrip(
  days,
  roomType = 'room for one person' | 'apartment' | 'president apartment',
  assessment = 'positive' | 'negative'
) {
  days = Number(days);
  nights = days - 1;
  let total = 0;
  let discount = 1;
  const positiveScore = 1.25;
  const negativeScore = 0.9;

  if (assessment === 'positive') {
    if (roomType === 'room for one person') {
      discount = 1;
      total = nights * 18 * discount * positiveScore;
    } else if (roomType === 'apartment') {
      if (nights < 10) {
        discount = 0.7;
        total = nights * 25 * discount * positiveScore;
      } else if (nights >= 10 && nights <= 15) {
        discount = 0.65;
        total = nights * 25 * discount * positiveScore;
      } else if (nights > 15) {
        discount = 0.5;
        total = nights * 25 * discount * positiveScore;
      }
    } else if (roomType === 'president apartment') {
      if (nights < 10) {
        discount = 0.9;
        total = nights * 35 * discount * positiveScore;
      } else if (nights >= 10 && nights <= 15) {
        discount = 0.85;
        total = nights * 35 * discount * positiveScore;
      } else if (nights > 15) {
        discount = 0.8;
        total = nights * 35 * discount * positiveScore;
      }
    }
  } else if (assessment === 'negative') {
    if (roomType === 'room for one person') {
      discount = 1;
      total = nights * 18 * discount * negativeScore;
    } else if (roomType === 'apartment') {
      if (nights < 10) {
        discount = 0.7;
        total = nights * 25 * discount * negativeScore;
      } else if (nights >= 10 && nights <= 15) {
        discount = 0.65;
        total = nights * 25 * discount * negativeScore;
      } else if (nights > 15) {
        discount = 0.5;
        total = nights * 25 * discount * negativeScore;
      }
    } else if (roomType === 'president apartment') {
      if (nights < 10) {
        discount = 0.9;
        total = nights * 35 * discount * negativeScore;
      } else if (nights >= 10 && nights <= 15) {
        discount = 0.85;
        total = nights * 35 * discount * negativeScore;
      } else if (nights > 15) {
        discount = 0.8;
        total = nights * 35 * discount * negativeScore;
      }
    }
  }
  console.log(total.toFixed(2));
}
