// End cycle warning options
function scream(numberOfScreams) {
  for (var i = 0; i < numberOfScreams; i++) {
    console.log("AAAAAAAAAAA");
  }
}

function beep(numberOfEs) {
  var myBeep = "B";
  for (var i = 0; i < numberOfEs; i++) {
    myBeep += "E";
  }
  myBeep += "P";
  console.log(myBeep);
}

function countToNumberAndBeep(countNumber) {
  for (var i = 0; i < countNumber; i++) {
    console.log(i + 1);
  }
  beep(5);
}

function waitFor(time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
}

// Washing clothes
function washClothes(numberOfSpins) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(numberOfSpins);
    }, numberOfSpins * 1000);
  });
}

washClothes(3)
  .then((numberOfSpins) => {
    beep(numberOfSpins);
    return waitFor(2000);
  })
  .then(() => {
    scream(2);
  });
