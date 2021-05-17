# Date API, Descriptors, Getters / Setters
* Write an object with getter/setterfield name.

```
const obj = {
name: [], // ['name', length][]
set name,
get name,
}
console.log(obj.name)
obj.name = 'Vrezh, Artavazd';
console.log(obj.name) // [['Vrezh', 7], ['Artavazd', 10]]
```


* Write an object with field name.

```
const obj = {
name: [], // ['name', length][]
set name,
get name,
}
console.log(obj.name)
obj.name = 'Vrezh, Artavazd';
console.log(obj.name) // [['Vrezh', 7], ['Artavazd', 10]]
```

* The input is object, which keys are student's names and values are array of their scores. Find the
student with the best average score.

```
getBestStudent({
John: [100, 90, 80],
Bob: [100, 70, 80],
});
// OUTPUT => "John"
// John's avg = 90
// Bob's avg = 83.33
```


* The function should produce the same output even if dateStart is greaterthan dateEnd

Input Output

let january = new Date(2017, 0, 1); let march = new
Date(2017, 2, 1); monthsInterval(january, march)

['January', 'February', March']


let december = new Date(2017, 11, 1); let january =
new Date(2018, 0, 1); monthsInterval(december,
january)

['January', 'December']


let january2017 = new Date(2017, 0, 1); let january2018
= new Date(2018, 0, 1); monthsInterval(january2017,
january2018)

['January', 'February', 'March', 'April', 'May', 'June',
'July', 'August', 'September', 'October', 'November',
'December']


* Each year has 365 or 366 days. Given a string date representing a Gregorian calendar date formatted as
month/day/year,return the day-number of the year. All input strings in the tests are valid dates.

Input Output

dayOfYear("12/13/2020") 348

dayOfYear("12/17/2020") 352

dayOfYear("11/16/2020") 321

dayOfYear("1/9/2019") 9

dayOfYear("3/1/2004") 61

dayOfYear("12/31/2000") 366


* Write a function that, given a date (in the format MM/DD/YYYY),returns the day of the week as a string.
Each day name must be one of the following strings: "Sunday", "Monday", "Tuesday", "Wednesday",
"Thursday", "Friday", or "Saturday".

To illustrate, the day of the week for "12/07/2016" is "Wednesday".


* This challenge assumes the week starts on Sunday.*

Input Output

getDay("12/07/2016") "Wednesday"

getDay("09/04/2016") "Sunday"

getDay("12/08/2011") "Thursday"


* Implement following function

```
const formatDate = (date) => {
return date;
};

console.log("Actual output: ", formatDate(new Date("2020-05-14")));
console.log("Expected output", "14 May 2020");
```

* Implement following function

```
const getWeekOfMonth = () => {};
const result = getWeekOfMonth(new Date(2017, 10, 9));
// => 2
```


* PLEASE READ ALL MATERIALS FROM READING SECTION!!!

## Hard and optional task

* Read and try to implement some methods of [Moment.js library](https://momentjs.com/)

## Reading

* [Date and time](https://javascript.info/date)
* [Object.defineProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
* [getters/setters](https://javascript.info/property-accessors)
* [getters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)
* [setters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set)
* [Descriptors](https://javascript.info/property-descriptors)
* [Property descriptors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor)
* [Descriptors](https://medium.com/jspoint/a-quick-introduction-to-the-property-descriptor-of-the-javascript-objects-5093c37d079)