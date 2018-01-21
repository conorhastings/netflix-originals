export default function getWeekArrays({ daysInMonth, firstWeekDay }) {
  const weekRows = [[]]
  for (let i = 0; i < daysInMonth + firstWeekDay ; i++) {
    let row = weekRows[weekRows.length - 1];
    if (row.length === 7) {
      row = [];
      weekRows.push(row);
    }
    if (i < firstWeekDay) {
      row.push(undefined);
    } else {
      row.push((i + 1) - firstWeekDay)
    }
  }
  const finalWeekMissingDays = 7 - weekRows[weekRows.length - 1].length;
  if (finalWeekMissingDays) {
    weekRows[weekRows.length -1] = (
      weekRows[weekRows.length -1]
      .concat(Array.from({ length: finalWeekMissingDays }))
    );
  }
  return weekRows;
}