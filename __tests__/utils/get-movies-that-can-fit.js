import getMoviesThatCanFit from '../../src/utils/get-movies-that-can-fit';

test('should return 3 if dayHeight=100 and launches=3', () => {
  const is = getMoviesThatCanFit({ launches: [undefined, undefined, undefined], dayHeight: 100 });
  expect(is).toEqual(3);
});

test('should return 2 if dayHeight=100 and launches=4', () => {
  const is = getMoviesThatCanFit({ launches: [undefined, undefined, undefined, undefined], dayHeight: 100 });
  expect(is).toEqual(2);
});

test('should return 0 if no movies fit', () => {
  const is = getMoviesThatCanFit({ launches: [undefined], dayHeight: 10 });
  expect(is).toEqual(0);
});