# W2D4 Promises

https://restcountries.eu/

## Today's tasks

- [ ] Callbacks recap - washing machine example
- [ ] A note on Synchronous vs. Asynchronous programming
- [ ] We've been asked to create a little command line program that asks the user a question, then waits for the user to type and sumbit their answers before storing the answer and asking another question. Let's implement it using `readline` and callbacks.
- [ ] Feel appropriately horrified by "callback hell"
- [ ] Let's implement the same program using promises
- [ ] We've been asked to update the washing machine program so that now, instead of counting the number of spins, it waits a certain amount of time before ringing. Let's do that with promises.

We've seen how promises are used in async programming with waiting for user input or for certain a amount of time. Let's now talk about async programming where we're waiting to return data.

- [ ] Implement a program where we ask the user for the name of a country, then fetch the calling code for that country.
- [ ] What happens if we enter an invalid country name?
- [ ] Now, let's make it so that if we enter an invalid country, the program warns us that there was a problem and prompts us again.
- [ ] Now, we want to find all of the countries that have the same calling code as the country we entered
- [ ] What if we wanted to find the calling codes of multiple countries at once?
- [ ] What if we wanted to call whichever country code comes from

## Recap on callbacks

A callback is a function that is:

- passed as an argument to another function
- called by that other function at some point during its execution

(Remember our washing machine example from last week)

## Asynchronous vs. Synchronous programming

Our washing machine code was an example of synchronous programming.
At no point did the code need to wait for something before doing something else.It ran through instructions one line at a time and executed them.

```js
function washClothes(numberOfSpins, ringAction) {
  // spin a certain number of time
  for (var i = 0; i < numberOfSpins; i++) {
    console.log("spin", i + 1);
  }
  ringAction(numberOfSpins);
}
```

However a lot (most!) of programs need the ability to wait for something before doing someting else.

### Asynchronous programming examples

A program can be told explicitely to dosomething after a certain amount of time has passed.

```js
const WAIT_TIME = 300; // time in milliseconds
const doSomething = () => {
  // do something
};
setTimeout(doSomething, WAIT_TIME);
```

A program can make a request for some kind of information to another program over the internet, and have to wait until a response information is received before doing something with that information.

```js
const fetchCountryCode = (countryName) => {
  // get info for that country over the internet
  fetch("https://restcountries.eu/rest/v2/name/" + countryName);
  // wait for the request to return the country code
  // make phone call
};
```

## Asynchronous programming with callbacks (aka callback hell)

```js
// nested callbacks
higherOrderFn((dataOne) => {
  callbackTwo((dataTwo) => {
    callbackThree((dataThree) => {
      callbackFour((dataFour) => {
        // do something
      });
    });
  });
});
```

## Enter Promises instead!

```js
// promises
functionOneReturningPromise()
  .then(() => {
    return functionTwoReturningPromise();
  })
  .then(() => {
    return functionThreeReturningPromise();
  })
  .then(() => {
    return functionFourReturningPromise();
  })
  .then(() => {
    // do something
  });
```

### So, what is a promise?

- A type of Object
- You can see it like an IOU ("I owe you").
- It encompasses the logic of either resolving (I got what you wanted!) or rejecting (whoops, something went wrong...) an operation.
- Will be in one of three possible states:

  - pending: the promise has yet to resolve to a value or reject with an error
  - fulfilled: the promise resolved successfully to a value (calling the resolve callback)
  - rejected: the promise was rejected with an error (calling the reject callback)

- Promises can be chained together using the `.then` method

  ### Creating a promise

  - A new promise can be created using the `Promise` class

- The `Promise` constructor takes a callback that accepts two functions as arguments:
  - `resolve`: This callback is called when the operation has finished successfully
  - `reject`: This callback is called if the operation failed (usually with the error)

```js
const myPromise = new Promise((resolve, reject) => {
  // do something and resolve when finished or reject with an error
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  if (randomNumber >= 5) {
    resolve(randomNumber);
  } else {
    reject("That number was too darn low...");
  }
});

myPromise.then((data) => {
  // here data is the randomNumber from above
  // do something with the resolved promises data
});
```

## Catching errors with callbacks vs. with promises

```js
functionOneReturningPromise()
  .then(() => {
    return functionTwoReturningPromise();
  })
  .then(() => {
    return functionThreeReturningPromise();
  })
  .then(() => {
    // do something
  })
  .catch((error) => {
    throw error;
  });
```
