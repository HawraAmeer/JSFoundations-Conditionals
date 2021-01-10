// Define the numbers and the operation here
const num1 = prompt("Enter the First Number?");
const num2 = prompt("Enter the Second Number?");

const userInput = prompt("What operation you want to do? ");
// console.log(userInput);

// Write if-statements here
if (userInput === "+") {
  console.log(`${num1} ${userInput} ${num2} = ${num1 + num2}`);
} else if (userInput === "-") {
  console.log(`${num1} ${userInput} ${num2} = ${num1 - num2}`);
} else if (userInput === "*") {
  console.log(`${num1} ${userInput} ${num2} = ${num1 * num2}`);
} else if (userInput === "/") {
  console.log(`${num1} ${userInput} ${num2} = ${num1 / num2}`);
} else {
  console.log("invalid operation!");
}
