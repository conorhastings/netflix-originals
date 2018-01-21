import getWeekArrays from '../../src/utils/get-week-arrays';

test('getWeekArrays produces correct multidimensional array with 7 days weeks and blanks filled with undefined', () => {
  const expected = [
	  [undefined, undefined, undefined, 1, 2, 3, 4], 
	  [5, 6, 7, 8, 9, 10, 11], 
	  [12, 13, 14, undefined, undefined, undefined, undefined]
  ];
  const is = getWeekArrays({ daysInMonth: 14, firstWeekDay: 3 });
  expect(is).toEqual(expected);
});