import { DateTime } from 'luxon';

function mapApiData(data) {
  return data.reduce((filmsByMonthYearObject, film) => {
    const parsedDate = DateTime.fromSQL(film.launch_date);
    if (!parsedDate.invalid) {
      const hash = `${parsedDate.year}${parsedDate.month}`;
      filmsByMonthYearObject[hash] = filmsByMonthYearObject[hash] || {};
      filmsByMonthYearObject[hash][parsedDate.day] = (
        (filmsByMonthYearObject[hash][parsedDate.day] || [])
        .concat(film)
      );
    }
    return filmsByMonthYearObject;
  }, {});
}

export default function getLaunches() {
  return fetch(`/launches`)
  .then(res => res.json())
  .then(mapApiData);
}