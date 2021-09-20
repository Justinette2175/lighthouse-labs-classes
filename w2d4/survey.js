// Code borrowed from @andydlindsay,https://github.com/andydlindsay/lectures/blob/master/w02d04/survey.js
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = [];

const askQuestion = (question) => {
  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

const questionPromise1 = askQuestion("Where do you live?")
  .then(() => askQuestion("How old are you?"))
  .then(() => askQuestion("How many pets do you have?"))
  .then(() => askQuestion("Are we done here?"));

questionPromise1.then((answer) => {
  rl.close();
  console.log("do done here", answer);
});
