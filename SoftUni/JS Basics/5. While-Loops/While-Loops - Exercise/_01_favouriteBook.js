function favouriteBook(input) {
  let index = 0;
  const favouriteBook = input[index++];
  let currentBook = input[index++];
  let isFound = false;
  let booksChecked = 0;

  while (currentBook !== 'No More Books') {
    booksChecked++;

    if (currentBook === favouriteBook) {
      isFound = true;
      break;
    }
    currentBook = input[index++];
  }

  if (isFound) {
    console.log(`You checked ${booksChecked - 1} books and found it.`);
  } else {
    console.log(`The book you search is not here!`);
    console.log(`You checked ${booksChecked} books.`);
  }
}
