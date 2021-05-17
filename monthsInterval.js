// 4. The function should produce the same output even if dateStart is greater than dateEnd

const monthsInterval = (firstMonth, lastMonth) => {
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
  for (let month of months) {
    let first = firstMonth.getMonth();
    let last = lastMonth.getMonth();
    let currentYear = lastMonth.getYear() - firstMonth.getYear();
    if (currentYear === 0) {
      return months.slice(first, last + 1);
    } else {
      let difMonths = currentYear * months.length + last - first;
      console.log(difMonths);
      let newArr = [];
      for (let i = 0; i < difMonths; i++) {
        newArr.push(months[i % 12]);
      }
      return newArr;
    }
  }
};
// let january = new Date(2017, 0, 1);
// let march = new Date(2017, 2, 1);
// console.log(monthsInterval(january, march));

// let december = new Date(2017, 11, 1);
// let january = new Date(2018, 0, 1);
// console.log(monthsInterval(december, january));

let january2017 = new Date(2017, 0, 1);
let january2018 = new Date(2018, 0, 1);
console.log(monthsInterval(january2017, january2018));
