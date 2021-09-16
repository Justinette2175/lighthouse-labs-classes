// forEach function that takes in an array, and a callback function, and performs that callback on each value in the array, one at a time
const myArrayOfNumbers = [1, 4, 6, 9];

function thingToDoOnEachItem(val) {
  console.log(val);
}

function forEach(array, cb) {
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    cb(value, i, array);
  }
}

// forEach(myArrayOfNumbers, (val) => {
//   console.log(val);
// });

// forEach(myArrayOfNumbers, (val) => {
//   console.log(val * 2);
// });

// For each item in my array, put that item to result Array, at position twice its index
const resultArray = [0, 0, 0, 0, 0, 0, 0, 0];
// [1, 0, 4, 0, 6, 0, 9, 0]

forEach(myArrayOfNumbers, thingToDoOnEachItem);

console.log(resultArray);
