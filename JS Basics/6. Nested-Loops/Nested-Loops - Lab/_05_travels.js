function travels(input) {
  let line = input.shift();
  let destination = '';
  let needed = 0;
  let current = 0;
  while (line !== 'End') {
    if (isNaN(line)) {
      destination = line;
      needed = Number(input.shift());
      current = 0;
    } else {
      current += Number(line);
      if (current >= needed) console.log(`Going to ${destination}!`);
    }
    line = input.shift();
  }
}
