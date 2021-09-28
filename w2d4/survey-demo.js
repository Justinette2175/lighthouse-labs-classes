const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("How are you doing this morning?", (answer) => {
  console.log("I got your answer and it was...", answer);
  rl.question("How about now?", (answer) => {
    console.log("I got your answer and it was...", answer);
  });
});
