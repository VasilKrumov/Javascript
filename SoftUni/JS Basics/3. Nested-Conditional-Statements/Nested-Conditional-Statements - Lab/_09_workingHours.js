function workingHours(hour, day) {
  hour = Number(hour);

  if (
    day === 'Monday' ||
    day === 'Tuesday' ||
    day === 'Wednesday' ||
    day === 'Thursday' ||
    day === 'Friday' ||
    day === 'Saturday'
  ) {
    if (hour >= 10 && hour <= 18) {
      console.log('open');
    } else {
      console.log('closed');
    }
  } else if (day === 'Sunday') {
    console.log('closed');
  }
}
