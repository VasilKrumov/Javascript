function login(arr) {
  const username = arr.shift();
  const pass = username.split('').reverse().join('');

  for (let i = 0; i < arr.length; i++) {
    if (i >= 3) {
      console.log(`User ${username} blocked!`);
      break;
    }
    if (arr[i] === pass) {
      console.log(`User ${username} logged in.`);
    } else {
      console.log(`Incorrect password. Try again.`);
    }
  }
}
