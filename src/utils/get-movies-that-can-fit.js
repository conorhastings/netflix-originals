const HEIGHT_OF_MOVIE = 23;

export default function getMoviesThatCanFit({ launches, dayHeight }) {
  /* subtract 1 for day number that also takes up 16px */
  const moviesThatCanFit = Math.max(0, Math.min(launches.length, Math.floor(dayHeight / HEIGHT_OF_MOVIE) - 1));
  /* additonal subtract potentially for show all */
  return moviesThatCanFit && launches.length > moviesThatCanFit ? moviesThatCanFit - 1 : moviesThatCanFit;
}