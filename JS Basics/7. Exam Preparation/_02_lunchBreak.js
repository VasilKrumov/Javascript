function lunchBreak(name, episodLength, lunchLength) {
  episodLength = Number(episodLength);
  lunchLength = Number(lunchLength);

  const lunchTime = lunchLength / 8;
  const freeTime = lunchLength / 4;

  const timeLeft = lunchLength - lunchTime - freeTime;

  if (timeLeft >= episodLength) {
    console.log(
      `You have enough time to watch ${name} and left with ${Math.ceil(
        timeLeft - episodLength
      )} minutes of free time.`
    );
  } else {
    console.log(
      `You don't have enough time to watch ${name}, you need ${Math.ceil(
        timeLeft - episodLength
      )} more minutes.`
    );
  }
}

lunchBreak('Game of Thrones', 60, 96);
