// 8. Implement following function

const getWeekOfMonth = (date) => {
  let prefixes = [1, 2, 3, 4, 5];

  return prefixes[Math.floor(date.getDate() / 7)];
};

const result = getWeekOfMonth(new Date(2017, 10, 9));
console.log(result); // 2
