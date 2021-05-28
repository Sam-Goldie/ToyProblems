// page 181, problem 16.1

// TASK: swap two numbers in place without creating any new variables for storage

const numberSwap = (num1, num2) => {
  console.log(`Num1 is ${num1.toString()} and num2 is ${num2.toString()}`);
  if (num2 > num1) {
    // set num2 to equal the absolute value of num2 minus num1
    num2 = num2 - num1;
    // set num1 to equal num1 plus num2
    num1 = num1 + num2;
    // set num2 to equal the absolute value of num1 minus num2
    num2 = num1 - num2;
  } else {
    num1 = num1 - num2;
    num2 = num1 + num2;
    num1 = num2 - num1;
  }
  console.log(`Num1 is ${num1.toString()} and num2 is ${num2.toString()}`);
};

numberSwap(3, -1);