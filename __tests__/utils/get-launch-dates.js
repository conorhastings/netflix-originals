import getLaunchDates from '../../server/utils/get-launch-dates';

test('should return movies keyed by day for year and month', () => {
  const is = getLaunchDates({ year: 2017, month: 1 });
  expect(Object.keys(is).length).toEqual(2);
  expect(is[1].length).toEqual(6);
  expect(is[14].length).toEqual(1);
});

test('should return empty object if month has no movies', () => {
  const is = getLaunchDates({ year: 2018, month: 1 });
  expect(Object.keys(is).length).toEqual(0);
});
