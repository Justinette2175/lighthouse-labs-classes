function sum(a, b) {
  return a + b;
}

function doToTwoNumbers(a, b, callback) {
  return callback(a, b);
}

console.log(doToTwoNumbers(1, 2, sum));
