const myFunctionReturningAPromise = () => {
  return new Promise((resolve, reject) => {
    resolve(3);
  });
};

myFunctionReturningAPromise().then((resolvedValue) => {
  console.log("value", resolvedValue);
});

const myPromise = new Promise((resolve, reject) => {
  console.log("I'm running");
  resolve(3);
});

myPromise.then((resolvedValue) => {
  console.log("value", resolvedValue);
});
