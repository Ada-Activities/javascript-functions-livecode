// const doubleTheNums = function(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		arr[i] *= 2;
// 	}
// 	return arr;
// };

// convert above function to an arrow function

const doubleTheNums = arr => { // parens can be removed because there is only one argument
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= 2;
  }
  return arr;
};

let list1 = [1, 2, 3, 4];
console.log(doubleTheNums(list1));

// Write a function that prints out "Good morning, class!"
const classGreeting = () => console.log('Good morning, class!');

// Write a function that prints a random number (integer) between 1 and 100.
const randomNum = () => {
  // Math.random()'s result is [0, 1) (the 1 is exclusive)
  // JS has no randint function, so if we need numbers (integers) in a range
  // from a to b (inclusive), we start by multiplying the result of random
  // by the total number of values we need (b - a + 1 -> 100 - 1 + 1 = 100).
  // Next we take the floor to chop off any decimal places. Finally, we
  // add a (1) to move the random number up into our desired range.

  const myNum = Math.floor(Math.random() * 100) + 1;
  // console.log(myNum);
  return myNum;
};

// use one of the functions above as the action parameter when you invoke the callback function below
const doMultipleTimes = (action, numTimes) => {
  // action is a reference to a callback
  for (let i = 0; i < numTimes; i++) {
    console.log(action());
  }
};

doMultipleTimes(classGreeting, 7);
doMultipleTimes(randomNum, 3);

// use doMultipleTimes with an anonymous function. for a challenge, try using
// the enclosing scope to hold a value between calls (suggestion: calculate
// subsequent powers of 2 on each call, starting from 2^0 = 1)

let powersOf2 = 1;  // store tracking value in the enclosing scope (here, global)

doMultipleTimes(() => {
  // python would be angry here, unless we explicitly tell it powersOf2 is global
  // since JS differentiates between declaration and assignment, JS can tell
  // we mean the enclosing powersOf2
  const currPower = powersOf2;
  powersOf2 *= 2;
  return currPower;
}, 10);

// What if we want to keep powersOf2 from being global so that we could have
// multiple power sequences running without affecting each other?

const powerFactory = () => {
  let powersOf2 = 1;  // initialize the power each call to powerFactory

  // here's our original anonymous function
  // a new one gets built each time we call powerFactory,
  // each with its own power variable
  return () => {
    const currPower = powersOf2;
    powersOf2 *= 2;
    return currPower;
  };
};

doMultipleTimes(powerFactory(), 10);  // 1 -> 512
doMultipleTimes(powerFactory(), 10);  // 1 -> 512

