// Code borrowed from @andydlindsay,https://github.com/andydlindsay/lectures/blob/master/w02d04/survey.js
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = [];

function askQuestion(question) {
  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

askQuestion("How do promises work?").then((data) => {
  console.log("data is", data);
});

// function washClothes(numberOfSpins, ringAction) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       ringAction();
//       resolve(2);
//     }, numberOfSpins * 1000);
//   });
// }

// const myAnswers = [];

// const myVar = washClothes(3, () => {
//   console.log("AAAAAA");
// }).then((data) => {
//   console.log("data is", data);
//   myAnswers.push(data);
//   console.log("my answers in the then", myAnswers);
//   return data;
// });

// console.log("myAnswers is", myAnswers);
