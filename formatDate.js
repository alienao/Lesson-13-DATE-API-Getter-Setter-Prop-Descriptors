//7. Implement following function

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const formatDate = (date) => {
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  return `${day} ${months[month]} ${year}`;
};

console.log("Actual output: ", formatDate(new Date("2020-05-14")));
