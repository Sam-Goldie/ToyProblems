const stepWays = (n) => { // n = 5
  let counter = 0;
  const takeStep = (stepSize, steps) => {
    steps -= stepSize;
    if (steps === 0) {
      counter++;
    } else if (steps > 0) {
      takeStep(1, steps);
      takeStep(2, steps);
      takeStep(3, steps);
    }
  }
  takeStep(1, n);
  takeStep(2, n);
  takeStep(3, n);
  return counter;
}

console.log(stepWays(1000));