import getStateFromPath from '../../src/utils/get-state-from-path';
import getLaunchDates from '../../server/utils/get-launch-dates';
import getWeekArrays from '../../src/utils/get-week-arrays';

const history = {
  location: {
    pathname: '/calendar/2017/1'
  }
}

test('should correctly return state for given path', () => {
  const state =  getStateFromPath(history);
  /* differing system locales cause this value to mess up so removing from test */
  state.monthName = undefined;
  expect(state).toEqual({
    loading: false,
    year: 2017, 
    month: 1, 
    firstWeekDay: 0,
    daysInMonth: 31,
    weekRows: getWeekArrays({ daysInMonth: 31, firstWeekDay: 0 })
  });
});
