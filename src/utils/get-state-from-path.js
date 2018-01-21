import { DateTime } from 'luxon';
import getWeekArrays from './get-week-arrays';

export default function getStateFromPath(history) {
  const [,, year, month] = history.location.pathname.split('/');
  let date = DateTime.local(parseInt(year), parseInt(month));
  /* in case of invalid route just go to current month */
  if (date.invalid) {
    date = DateTime.local();
    history.push(`/calendar/${date.year}/${date.month}`)
  }
  const firstWeekDay = date.startOf('month').weekday === 7 ? 0 : date.startOf('month').weekday;
  const daysInMonth = date.daysInMonth; 
  return fetch(`/launches/${date.year}/${date.month}`).then(res => res.json()).then(launches => ({
    loading: false,
    year: date.year, 
    month: date.month, 
    monthName: date.monthLong,
    firstWeekDay: firstWeekDay,
    daysInMonth: daysInMonth,
    weekRows: getWeekArrays({ daysInMonth, firstWeekDay }),
    launches
  }));
}
