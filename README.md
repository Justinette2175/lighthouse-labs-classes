# W1D4 Callbacks

## About me (Justine Gagnepain)

- Montreal-based
- Lighthouse 2017 grad :D
- Contracting for various companies since then (talk to me about post-lighthouse career prospects!)
- Studying computation arts part-time at Concordia University
- First time teaching class today, hope it's good!

## Quick disclaimer about callbacks

The callbacks logic might bend your brain in seemingly unnatural ways (definitely did mine back in the day!). Then again it might not.

But if you find yourself a bit stunned, trust it's the kind of mental gynmastics that gets smoother over time. It might not click right away, but it surely will as you are exposed to more and more use cases. Don't sweat it.

## Our task for today

Our boss has asked us to simulate a food tasting robot.

It should:

1. Eat
2. Count to 10 (letting the flavor seep in)
3. Let us know what they think (ex. Screaming?)

## Step by step

- [ ] Let's implement the taste food function based on our initial requirements (eat, wait, scream)

- [ ] Let’s implement a function called scream to store the scream itself, so we can scream whenever we want to.

- [ ] Let's now refator that screamOnTen to replace the console log statement with the scream function

- [ ] Now, let's make another robot food taster that gives a thumbs up at the end

- [ ] What's the problem with this?

- [ ] What if we want to count to any number (argument passing)

- [ ] How can we make a function that counts to 10 and then does something, anything?

- [ ] What if we will never really need to reuse the scream or wink functions, and we don't want to store them in variables?

- [ ] Let's instead use the double arrow notation here

- [ ] How would we modify our function so that it counts to any number we want and then does any action we want?

- [ ] How would we modify our function so that it counts to any number, and then does two actions?

- [ ] Can we change the order of the arguments to that function?

- [ ] So how come we can do whatever we want with all these functions?

_Next part is pretty abstract. Make sure to focus for now, and trust that it will make sense in time!_

- [ ] So far, we have never passed in any arguments to our callback function. Let's instead modify the scream function so that now screams a different number of 'A's each time (same number that is passed as the count).

- [ ] Let's look at another example. Let's make a function that does any action we like on two numbers.

- [ ] Let's create a forEach function that takes in an array and a callback function, and performs the callback function on each item in the array, one at a time.

---

## What we learned

### Higher order function and callbacks!

- A callback function is a function, anonymous or not, which is passed as an argument to another function.

- A higher order function is a function that takes in a callback function as an argument and executes it.

## Functions are First-Class Objects in Javascript

Functions are just like any other Objects in Javascript (in fact they are a type of Object :S). They can do everything that other objects can do .

Functions can be, among other things,:

- Stored in variables
- Passed as arguments to other functions
- Returned from other functions

### Double Arrow Syntax

There are multiple syntaxes to declare a function. They are mostly equivalent (for now, don't worry about the slight differences which we will cover later in the course).

```js
function scream() {
  console.log("AAAAAAAAA");
}

var scream = function () {
  console.log("AAAAAAAAA");
};

// Double Arrow Notation
var scream = () => {
  console.log("AAAAAAAAA");
};
```

### Anonymous functions

Functions that you don't need to reuse don't have to be given a name or stored in a variable in memory.
This is particularly useful for callback functions.

```js
function countToNAndDo(count, callback) {
  for (var i = 0; i < count; i++) {
    console.log(i + 1);
  }
  callback();
}

// Anonymous function passed in as a callback
countToNAndDo(10, () => {
  console.log("AAAAAAAAAA");
});
```

### Callback functions can accept arguments too!

```js
function sum(a, b) {
  return a + b;
}

function doToTwoNumbers(a, b, callback) {
  return callback(a, b);
}

console.log(doToTwoNumbers(1, 2, sum));
// returns 3
```
