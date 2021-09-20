// Go through the array and console log twice each number
function forEach(array, action) {
  for (var i = 0; i < array.length; i++) {
    var value = array[i];
    action(value);
  }
}

forEach([1, 2, 5, 7], (number) => {
  console.log(number, "doubled is", number * 2);
});

// Go through the array and push twice the number to another array

let doubled = [];

forEach([1, 2, 5, 7], (number) => {
  doubled.push(number * 2);
});

console.log(doubled);
