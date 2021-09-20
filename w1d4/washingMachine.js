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

// Washing clothes
function washClothes(numberOfSpins, ringAction) {
  // spin a certain number of time
  for (var i = 0; i < numberOfSpins; i++) {
    console.log("spin", i + 1);
  }
  ringAction(numberOfSpins);
}

washClothes(10, scream);
