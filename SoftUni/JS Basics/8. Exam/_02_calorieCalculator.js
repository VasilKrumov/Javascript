function calorieCalculator(sex, weight, height, age, activity) {
  weight = Number(weight);
  height = Number(height);
  age = Number(age);
  height *= 100;

  const bmiMen = 66 + 13.7 * weight + 5 * height - 6.8 * age;
  const bmiWomen = 655 + 9.6 * weight + 1.8 * height - 4.7 * age;
  let calories;

  switch (sex) {
    case 'm':
      switch (activity) {
        case 'sedentary':
          calories = bmiMen * 1.2;
          break;
        case 'lightly active':
          calories = bmiMen * 1.375;
          break;
        case 'moderately active':
          calories = bmiMen * 1.55;
          break;
        case 'very active':
          calories = bmiMen * 1.725;
          break;
        default:
          break;
      }
      break;

    case 'f':
      switch (activity) {
        case 'sedentary':
          calories = bmiWomen * 1.2;
          break;
        case 'lightly active':
          calories = bmiWomen * 1.375;
          break;
        case 'moderately active':
          calories = bmiWomen * 1.55;
          break;
        case 'very active':
          calories = bmiWomen * 1.725;
          break;
        default:
          break;
      }
      break;

    default:
      break;
  }
  console.log(
    `To maintain your current weight you will need ${Math.ceil(
      calories
    )} calories per day.`
  );
}

calorieCalculator('f', 54, 1.65, 21, 'lightly active');
