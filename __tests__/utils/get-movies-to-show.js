import getMoviesToShow from '../../src/utils/get-movies-to-show';

test('should return 3 movies if should show 3 movies even if launches is greater', () => {
  const is = getMoviesToShow({ launches: [1, 2, 3, 4, 5], moviesThatCanFit: 3 });
  expect(is).toEqual([1,2,3]);
});

test('should return empty array if arguments not provided', () => {
  const is = getMoviesToShow();
  expect(is).toEqual([]);
});