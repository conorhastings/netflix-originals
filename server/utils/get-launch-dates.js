const { DateTime } = require('luxon');

const data = [
  {
    "id": "ee3c0801-9609-49ea-87fa-fcb9b9f438b9",
    "launch_date": "2017-04-28 00:00:00",
    "title": "Black Is The New Orange: Season 1"
  },
  {
    "id": "01ddcfb6-9be0-4d99-a6e3-6b17ee37ac97",
    "launch_date": "2017-01-14 00:00:00",
    "title": "Black Is The New Orange: Season 2"
  },
  {
    "id": "8761273c-958f-49ef-bc1a-9f8022d24d11",
    "launch_date": "2017-02-06 00:00:00",
    "title": "Black Is The New Orange: Season 3"
  },
  {
    "id": "789f7d37-b43d-4fd0-b169-6745cd103d25",
    "launch_date": "2017-03-14 00:00:00",
    "title": "Strangest Things: Season 1"
  },
  {
    "id": "8fa94004-414f-4eed-bb0e-45a2b10ebebf",
    "launch_date": "2017-05-27 00:00:00",
    "title": "Strangest Things: Season 2"
  },
  {
    "id": "0d413a7a-b776-44d5-9235-19602346f94a",
    "launch_date": "2017-06-12 00:00:00",
    "title": "House of Cats: Season 1"
  },
  {
    "id": "65a208a5-768b-4677-838f-33c4dd385f9f",
    "launch_date": "2017-07-01 00:00:00",
    "title": "House of Cats: Season 2"
  },
  {
    "id": "585a9285-d411-4625-a3f5-357f3e554673",
    "launch_date": "2017-08-11 00:00:00",
    "title": "Brighter"
  },
  {
    "id": "3adad7b8-da99-4aba-b4f1-df43d3d9d7cf",
    "launch_date": "2017-08-01 00:00:00",
    "title": "Sandy Waxer"
  },
  {
    "id": "e0986a67-d23a-415d-88d8-935de948ad16",
    "launch_date": "2017-12-12 00:00:00",
    "title": "Dave Chapel Stand-up Special"
  },
  {
    "id": "5d3a0f27-d422-4629-ac5a-84732e248be5",
    "launch_date": "2017-01-01 00:00:00",
    "title": "The Adventures of Potato"
  },
  {
    "id": "ee3c0801-9609-49ea-87fa-fcb9b9f438b",
    "launch_date": "2017-01-01 00:00:00",
    "title": "good"
  },
  {
    "id": "ee3c0801-9609-49ea-87fa-fcb9b9f438",
    "launch_date": "2017-01-01 00:00:00",
    "title": "episode 2"
  },
  {
    "id": "ee3c0801-9609-49ea-87fa-fcb9b9f43",
    "launch_date": "2017-01-01 00:00:00",
    "title": "episode 3"
  },
  {
    "id": "ee3c0801-9609-49ea-87fa-fcb9b9f",
    "launch_date": "2017-01-01 00:00:00",
    "title": "episode 4 has a veery long episode title don't it"
  },
  {
    "id": "ee3c0801-9609-49ea-87fa-fcb9b",
    "launch_date": "2017-01-01 00:00:00",
    "title": "conor is good episode 5"
  }
].reduce((filmsByMonthYearObject, film) => {
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

module.exports = function getLaunchDates({ year, month }) {
  return data[`${year}${month}`] || {};
}
