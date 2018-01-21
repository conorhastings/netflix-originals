export default function getMoviesToShow({ launches = [], moviesThatCanFit } = {}) {
  const movies = [];
  for (let i = 0; i < moviesThatCanFit; i++) {
    movies.push(launches[i]);
  }
  return movies;
}