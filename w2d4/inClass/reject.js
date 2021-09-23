const myPromise = new Promise((resolve, reject) => {
  // do something and resolve when finished or reject with an error
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  if (randomNumber >= 5) {
    resolve(randomNumber);
  } else {
    reject("That number was too darn low...");
  }
});

myPromise
  .then((data) => {
    console.log("data is", data);
    throw new Error("That number was too darn low...");
    // here data is the randomNumber from above
    // do something with the resolved promises data
  })
  .catch((e) => {
    console.log(e);
  });
