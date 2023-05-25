function fibonacci(num) {

  if (num === 0) {
    return 0
  }

  let counter = num - 1
  const fibArr = [0, 1]

  while (counter > 0) {
    newFibonacciNum = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]
    fibArr.push(newFibonacciNum)
    counter--
  }
  return fibArr[fibArr.length - 1]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// argument is the nth index in the series 
// argument is how many times we do the algorithm
// return the value of the series at index of argument

// create a counter var that == arguement
// start with an array of [0,1]
// while counter > 10

// the next number is array -1 + array -2
// add this number to the end of the array
// counter--
// And a written explanation of your solution
