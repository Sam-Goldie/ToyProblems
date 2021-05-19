 var averageWaitingTime = function(customers) {
  let waitTimes = [];
  let previousMealFinish = 0;
  for (let customer of customers) {
    if (previousMealFinish <= customer[0]) {
      waitTimes.push(customer[1]);
    } else {
      waitTimes.push(previousMealFinish + customer[1] - customer[0]);
    }
    previousMealFinish = waitTimes[waitTimes.length - 1] + customer[0];
  }
  let result = 0;
  for (let time of waitTimes) {
    result += time;
  }
  return result / waitTimes.length;
};