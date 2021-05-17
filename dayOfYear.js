// 5. Each year has 365 or 366 days. Given a string date representing a Gregorian calendar date formatted as
// month/day/year,return the day-number of the year. All input strings in the tests are valid dates.

const dayOfYear = (newDate) => {
  let date = newDate.split("/");
  let [MM, DD, YYYY] = date;
  date = new Date([YYYY, MM, DD].join("-"));
  return Math.floor(
    (date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)
  );
};

console.log(
  dayOfYear("12/13/2020") // 348
);
