// Function that takes two numbers and an action and does that action on the two numbers passed
function sum(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

function doToTwoNumbers(a, b, cb) {
  return cb(a, b);
}

const mySumResult = doToTwoNumbers(3, 6, sum);

const myMultiplicationResult = doToTwoNumbers(5, 2, (x, y) => x * y);

console.log(myResult);
