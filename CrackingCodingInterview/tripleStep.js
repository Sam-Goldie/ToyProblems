// const stepWays = (n) => { // n = 5
//   let counter = 0;
//   const stepCache = {}; 
//   const takeStep = (steps, path) => {
//     steps -= stepSize;
//     if (steps === 0) {
//       if (!stepCache[JSON.stringify(path)]) {
//         stepCache[]
//       }
//       counter++;
//     } else if (steps > 0) {
//       if (stepCache[steps]) {
//         counter += stepCache[steps];
//       } else {
//         takeStep(steps-1, path.concat([1]));
//         takeStep(steps-2, path.concat([2]));
//         takeStep(steps-3, path.concat([3]));
//       }
//     }
//   }
//   takeStep(n, []);
//   return counter;
// }

const stepWays = (n) => {
  // create a stepCache that stores values of n as keys with values that are counters counting how many ways there are to make that value
  const stepCache = {};
  // create a takeStep function that takes steps and within which:
  const takeStep = (steps) => {
    // if steps is 0
    if (steps === 0) {
      // return 1
      return 1;
    }
    // if steps is less than 0
    if (steps < 0) {
      // return 0
      return 0;
    }   
    // if the cache doesn't have a key of steps
    if (!stepCache[steps]) {
      // add a key of steps to the cache with a value of a call to takeStep at n - 1, n - 2, and n - 3
      stepCache[steps] = takeStep(steps - 1) + takeStep(steps - 2) + takeStep(steps - 3);
    }
    // return the value of the cache at key of steps
    return stepCache[steps];
  }
  // return a call to takeStep passing in n
  return takeStep(n)
}

console.log(stepWays(50));
