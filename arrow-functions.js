/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

function addTwoNumbers(a, b) {
  
  return a + b;  
}

let sum = addTwoNumbers(3,3);
console.log(sum);

6

// Arrow Function With Parameters

const addTwoNumbers = (a, b) => {
  
  return a + b;  
}

let sum = addTwoNumbers(3,3);
console.log(sum);

6


// Single Line Arrow Function With Parameters

const addTwoNumbersII = (a, b) => (a + b);

let sumII = addTwoNumbersII(3, 3);

console.log(sumII);

6


// Implicit Returns

const sayAnything = message => console.log(message);

sayAnything('almost anything');



almost anything


or


const sayAnythingII = () => console.log("almost everything");

sayAnythingII();


almost everything


// Returning Multiple Lines

const soManyLines = () => (

   <p>
     The Cuss you are! 
   </p>

)

soManyLines();



