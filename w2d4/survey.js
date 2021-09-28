// Code borrowed from @andydlindsay,https://github.com/andydlindsay/lectures/blob/master/w02d04/survey.js
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = [];

const askQuestion = (question, answersUpToNow) => {
  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
      const newAnswers = [...answersUpToNow, answer];
      resolve(newAnswers);
    });
  });
};

const myAnswers = [];

const myPromises = askQuestion("Where do you live?", [])
  .then((answers1) => {
    console.log("answer1", answers1);
    return askQuestion("How old are you?", answers1);
  })
  .then((answers2) => {
    console.log("answer2", answers2);
    return askQuestion("How many pets do you have?", answers2);
  })
  .then((answers3) => {
    console.log("answer3", answers3);
    return askQuestion("Are we done here?", answers3);
  });
