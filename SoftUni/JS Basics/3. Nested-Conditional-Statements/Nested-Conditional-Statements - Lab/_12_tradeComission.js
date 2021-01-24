function tradeComission(city, count) {
  count = Number(count);
  switch (city) {
    case 'Sofia':
      if (count < 0) {
        console.log('error');
      } else if (count >= 0 && count <= 500) {
        console.log((count * 0.05).toFixed(2));
      } else if (count > 500 && count <= 1000) {
        console.log((count * 0.07).toFixed(2));
      } else if (count > 1000 && count <= 10000) {
        console.log((count * 0.08).toFixed(2));
      } else {
        console.log((count * 0.12).toFixed(2));
      }
      break;
    case 'Varna':
      if (count < 0) {
        console.log('error');
      } else if (count >= 0 && count <= 500) {
        console.log((count * 0.045).toFixed(2));
      } else if (count > 500 && count <= 1000) {
        console.log((count * 0.075).toFixed(2));
      } else if (count > 1000 && count <= 10000) {
        console.log((count * 0.1).toFixed(2));
      } else {
        console.log((count * 0.13).toFixed(2));
      }
      break;
    case 'Plovdiv':
      if (count < 0) {
        console.log('error');
      } else if (count >= 0 && count <= 500) {
        console.log((count * 0.055).toFixed(2));
      } else if (count > 500 && count <= 1000) {
        console.log((count * 0.08).toFixed(2));
      } else if (count > 1000 && count <= 10000) {
        console.log((count * 0.12).toFixed(2));
      } else {
        console.log((count * 0.145).toFixed(2));
      }
      break;
    default:
      console.log('error');
      break;
  }
}
