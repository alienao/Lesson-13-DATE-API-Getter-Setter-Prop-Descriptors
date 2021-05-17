//6. Write a function that, given a date (in the format MM/DD/YYYY),returns the day of the week as a string.
// Each day name must be one of the following strings: "Sunday", "Monday", "Tuesday", "Wednesday",
// "Thursday", "Friday", or "Saturday".

let weeks = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const dayOfWeek = (newDate) => {
  let date = newDate.split("/");
  let [MM, DD, YYYY] = date;
  date = new Date([YYYY, MM, DD].join("-"));
  return weeks[date.getDay()];
};

console.log(dayOfWeek("12/07/2016"));
