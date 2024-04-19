//task#01
// Declare a variable 'greeting' of type string and assign it the value "Hello, World!"
let greeting: string = "Hello, World!";
// Output the value of the 'greeting' variable to the console
console.log(greeting);

//task#02
// Declare variables 'a' and 'b' of type number and assign values to them
let a: number = 10;
let b: number = 5;
// Calculate the sum of 'a' and 'b' and store the result in the variable 'sum'
let sum: number = a + b;
// Calculate the difference between 'a' and 'b' and store the result in the variable 'difference'
let difference: number = a - b;
// Calculate the product of 'a' and 'b' and store the result in the variable 'product'
let product: number = a * b;
// Calculate the quotient of 'a' divided by 'b' and store the result in the variable 'quotient'
let quotient: number = a / b;
// Print the values of 'sum', 'difference', 'product', and 'quotient' to the console
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);

//task#03
// Declare variables p and q of type number and assign initial values
let p: number = 10;
let q: number = 5;
// Display a message indicating the values of p and q before swapping
console.log("Before swapping:");
console.log("p:", p);
console.log("q:", q);
// Perform swapping without using a temporary variable
p = p + q; // Add the values of p and q and store the result in p
q = p - q; // Subtract the original value of q from the updated value of p and store the result in q
p = p - q; // Subtract the new value of q from the updated value of p and store the result in p
// Display a message indicating the values of p and q after swapping
console.log("After swapping:");
console.log("p:", p);
console.log("q:", q);

//task#04
// Declare a variable 'myString' of type string and assign it the value "Hello, TypeScript!"
let myString: string = "Hello, TypeScript!";
// Output the value of 'myString' to the console
console.log(myString);
// Declare a variable 'myNewString' of type number and attempt to parse 'myString' as an integer
let myNewString: number = parseInt(myString);
// Output the value of 'myNewString' to the console
console.log(myNewString);

//task#05
// Declare a variable num1 and assign it the value 17, specifying its type as number
let num1: number = 17;
// Declare a variable num2 and assign it the value 5, specifying its type as number
let num2: number = 5;
// Declare a variable remainder and assign it the result of num1 modulo num2,
// which calculates the remainder when num1 is divided by num2.
let remainder: number = num1 % num2;
// Output a message to the console indicating the calculation performed and the result.
console.log("The remainder of", num1, "divided by", num2, "is", remainder);

//task#06
// Declare a variable named 'variable' and assign it the value 5
let variable = 5;
// Increment the value of the 'variable' by 1
variable++;
// Output the value of 'variable' to the console
console.log(variable);
// Declare a variable named 'variable1' and assign it the value 5
let variable1 = 5;
// Increment the value of 'variable1' by 1 using the += operator
variable1 += 1;
// Output the value of 'variable1' to the console
console.log(variable1);

//task#07
// Define three boolean variables A, B, and C
const A = true;
const B = false;
const C = true;

// Perform logical AND operation on A, B, and C
const AND = A && B && C; // Result will be false because all operands must be true for AND to be true
// Perform logical OR operation on A, B, and C
const OR = A || B || C; // Result will be true because at least one operand must be true for OR to be true
// Perform logical NOT operation on A
const NOT = !A; // Result will be false because NOT negates the value of A

//task#08
let num = 10;
num += 5;
console.log(num);
num -= 3;
console.log(num);
num *= 2;
console.log(num);
num /= 4;
console.log(num);

//task#09
let number2: number = 10;
if (number2 % 2 === 0) {
  console.log(`${number2} is even.`);
} else {
  console.log(`${number2} is odd.`);
}

//task#10
let age: number = 18;
if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote yet.");
}

//task#11
let score: number = 85;
let grade: string;
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
} else {
  grade = "F";
}

console.log(`The grade for the score ${score} is ${grade}`);

//task#12
let x: number = 10;
let y: number = 20;
let z: number = 15;

let max: number;

if (x >= y && x >= z) {
  max = x;
} else if (y >= x && y >= z) {
  max = y;
} else {
  max = z;
}

console.log(`The maximum of ${x}, ${y}, and ${z} is ${max}`);

//task#13
let year: number = 2024;
let isLeapYear: boolean;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  isLeapYear = true;
} else {
  isLeapYear = false;
}
console.log(`Is ${year} a leap year? ${isLeapYear}`);

//task#14
let fahrenheit: number = 68;

let celsius: number;

celsius = ((fahrenheit - 32) * 5) / 9;

console.log(
  `${fahrenheit} Fahrenheit is equal to ${celsius.toFixed(2)} Celsius`
);

//task#15
let number: number = 5;

if (number > 0) {
  console.log(`${number} is positive`);
} else if (number < 0) {
  console.log(`${number} is negative`);
} else {
  console.log(`${number} is zero`);
}

//task#16
let number1: number = 7;
console.log(`Multiplication table for ${number}:`);
for (let i = 1; i <= 10; i++) {
  console.log(`${number} * ${i} = ${number * i}`);
}
