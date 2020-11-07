function greetings(age, gender) {
  if (gender === 'f') {
    if (age >= 16) {
      console.log('Ms.');
    } else {
      console.log('Miss');
    }
  } else if (age >= 16) {
    console.log('Mr.');
  } else {
    console.log('Master');
  }
}
