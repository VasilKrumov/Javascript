function movieRating(arr) {
  const movies = Number(arr[0]);
  let movieCount = arr[0] - 1;
  let index = 2;
  let currentLowestMovie = arr[1];
  let currentLowestRating = Number(arr[2]);
  let currentHighestMovie = arr[1];
  let currentHighestRating = Number(arr[2]);
  let ratingSum = currentHighestRating;
  let averageRating = 0;

  while (movieCount > 0) {
    const movie = arr[++index];
    const rating = Number(arr[++index]);
    ratingSum += rating;
    if (rating > currentHighestRating) {
      currentHighestRating = rating;
      currentHighestMovie = movie;
    }

    if (rating < currentLowestRating) {
      currentLowestMovie = movie;
      currentLowestRating = rating;
    }
    movieCount--;
  }

  averageRating = ratingSum / movies;

  console.log(
    `${currentHighestMovie} is with highest rating: ${currentHighestRating.toFixed(
      1
    )}`
  );
  console.log(
    `${currentLowestMovie} is with lowest rating: ${currentLowestRating.toFixed(
      1
    )}`
  );
  console.log(`Average rating: ${averageRating.toFixed(1)}`);
}

movieRating([
  5,
  'A Star is Born',
  7.8,
  'Creed 2',
  7.3,
  'Mary Poppins',
  7.2,
  'Vice',
  7.2,
  'Captain Marvel',
  7.1,
]);
