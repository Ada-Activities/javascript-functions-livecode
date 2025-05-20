// // const doubleTheNums = function(arr) {
// //   for (let i = 0; i < arr.length; i++) {
// //     arr[i] *= 2;
// //   }
// //   return arr;
// // };


// // convert above function to an arrow function
const doubleTheNums = (arr) => { // Single argument functions don't need parentheses around the parameter
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= 2;
  }
  return arr;
};

let list1 = [1, 2, 3, 4];
console.log(doubleTheNums(list1));


// Write a function that prints out "Good morning, class!"
const classGreeting = () => 'Good morning, class!';
console.log(classGreeting());

// Write a function that prints a random number (integer) between 1 and 100.
const randomNum = () => {
  const myNum = Math.floor(Math.random()*100) + 1;
  return myNum;
};

console.log(randomNum());


// use one of the functions above as the action parameter when you invoke the callback function below
const doMultipleTimes = (action, numTimes) => {
  for (let i = 0; i < numTimes; i++) {
    console.log(action());
  }
};

// use doMultipleTimes with an anonymous function. for a challenge, try using
// the enclosing scope to hold a value between calls (suggestion: calculate
// subsequent powers of 2 on each call, starting from 2^0 = 1)

const powerFactory = () =>{
  let powersOf2 = 1; //initialize the power for each call to powerFactory

  return () => {
    const currPower = powersOf2;
    powersOf2 *= 2;
    return currPower;
  };
};

doMultipleTimes(powerFactory(),10);
doMultipleTimes(powerFactory(),10);

// Create one execution context for powerFactory
let pf1 = powerFactory();
// Invoking pf1 calls the function returned by powerFactory with the context created on line 59
// Each call to pf1() prints out the next power of 2
console.log(pf1());
console.log(pf1());
console.log(pf1());

// Create a second execution context for powerFactory
let pf2 = powerFactory();
// Invoking pf2 calls the function returned by powerFactory with the context created on line 67
// Each call to pf2() prints out the next power of 2 within pf2's context
console.log(pf2());





