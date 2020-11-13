function steps(input) {
  let index = 0;
  const goalSteps = 10000;
  let steps = 0;

  while (steps < goalSteps) {
    const inputLine = input[index++];

    if (inputLine === 'Going home') {
      steps += Number(input[index++]);
      break;
    }

    steps += Number(inputLine);
  }

  if (steps >= goalSteps) {
    console.log(`Goal reached! Good job!`);
    console.log(`${steps - goalSteps} steps over the goal!`);
  } else {
    console.log(`${goalSteps - steps} more steps to reach goal.`);
  }
}
