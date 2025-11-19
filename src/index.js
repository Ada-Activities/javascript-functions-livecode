// Original function

// const doubleTheNums = function(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] *= 2;
//   }
//   return arr;
// };



// convert above function to an arrow function
// Single argument function does not require parentheses
const doubleTheNums = arr => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= 2;
  }
  return arr;
};


// Special Arrow function to show single line object return
// const fn = (arg0, arg1) => ({arg0, arg1});
// console.log(fn('dog', 'cat'));

// const list1 = [1,2,3,4];
// console.log(doubleTheNums(list1));

// Write a function that prints out "Good morning, class!"
const classGreeting = () => 'Good morning, class!';

// classGreeting();


// Write a function that prints a random number (integer) between 1 and 100.
const randomNum = () => Math.floor(Math.random() * 100) + 1;

// randomNum();


// use one of the functions above as the action parameter when you invoke the callback function below
const doMultipleTimes = (action, numTimes) => {
  for (let i = 0; i < numTimes; i++) {
    console.log(action());
  }
};

// doMultipleTimes(randomNum, 10);
// doMultipleTimes(classGreeting,50);


// use doMultipleTimes with an anonymous function. for a challenge, try using
// the enclosing scope to hold a value between calls (suggestion: calculate
// subsequent powers of 2 on each call, starting from 2^0 = 1)

// doMultipleTimes(() => {
//   const currPower = powersOf2;
//   powersOf2 *= 2;
//   return currPower;
// }, 10);

const powerFactory = (num) => {
  let powersOf2 = num;

  return () => {
    const currPower = powersOf2;
    powersOf2 *= 2;
    return currPower;
  };

};


const context1 = powerFactory(1);
const context2 = powerFactory(1);

doMultipleTimes(context1, 10);
doMultipleTimes(context2, 10);