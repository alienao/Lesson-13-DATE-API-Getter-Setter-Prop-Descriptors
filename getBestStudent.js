// 3. The input is object, which keys are student's names and values are array of their scores. Find the
// student with the best average score.

const getBestStudent = (obj) => {
  let arr = [];
  let keys = Object.keys(obj);
  for (let key in obj) {
    let avg = obj[key].reduce((a, b) => a + b);
    avg = avg / obj[key].length;
    arr.push(avg);
    console.log(`${key}'s avg = ` + avg);
  }
  let max = arr[0];
  let bestStudent = keys[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      bestStudent = keys[i];
    }
  }
  return bestStudent;
};

console.log(
  getBestStudent({
    John: [100, 90, 80],
    Bob: [100, 70, 80],
  })
);

// OUTPUT => "John"
// John's avg = 90
// Bob's avg = 83.33
