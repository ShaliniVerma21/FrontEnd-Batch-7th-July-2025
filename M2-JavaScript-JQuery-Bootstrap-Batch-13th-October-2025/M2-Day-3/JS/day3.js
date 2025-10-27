//single line comment

/*
Multiline
Comment
*/

//print message on console
console.log("Hello, World!");

//print message on webpage
document.write("Hello, World!");

//variables naming convention

/*
In JavaScript, following proper variable naming conventions is essential for writing clean, readable, 
and maintainable code. Here are some key conventions and best practices for naming variables:

- Javascript is a case-sensitive language(As- Age and age are different variables)
- The variable A and a are treated as two different variables
- Can consists of digits, underscore and alphabets ex- my_age,age21 
- Must begin with a letter or underscore character 
- Cannot begin with a number and cannot contain any punctuation marks
- Cannot contain any special characters like +, -, *, /
- Cannot contain spaces
*/
var name = "Develearn";
var name_ = "Develearn";
var $name = "Develearn";
var myName = "Develearn";//camel case
var My_name = "Develearn";
var _name = "Develearn";
var name123 = "Develearn";

//1. Descriptive Names: Use clear and descriptive names.
let userAge = 30; // Descriptive name
let a = 30; // Not descriptive

//2. Camel Case: Use camelCase for variable names.
let firstName1 = "John";
let lastName1 = "Doe";
let totalAmount = 100.50;

//3. Meaningful Abbreviations: Use abbreviations that are widely understood.
let numOfStudents = 25; // Meaningful abbreviation
let n = 25; // Not meaningful

//4. Avoid Reserved Keywords: Do not use JavaScript reserved keywords.
// let = 5; // Invalid
let score = 5; // Valid

//5. Uppercase for Constants: Use uppercase letters with underscores for constants.
const MAX_USERS = 100;
const PI = 3.14;

//6. Underscores for Readability: Optionally use underscores for readability.
let user_name = "Alice"; // Using underscores

//7. Avoid Single Character Names: Avoid single character names except for loop counters.
for (let i = 0; i < 10; i++) { // 'i' is acceptable as a loop counter
    console.log(i);
}
let x = 5; // Not recommended

//8. Plural Names for Arrays: Use plural names for arrays.
let students = ["Alice", "Bob", "Charlie"]; // Plural name for an array

//9. Verb-Noun Pairs for Functions: Use verb-noun pairs for function names.
function calculateTotal() {
    // Function to calculate total
}

//10. Consistency: Maintain consistency in naming conventions.
//Variables
let a1 = 20;
var b1 = 40;
const result = a1 + b1;
console.log(result);

//typeof function for variable type
console.log(typeof (result));

//var variables
var A = "name"; //create a variable
var A = "myname";//can redeclare a variable
A = "mynameis"; //can update value

let B="name"; //create a variable
//let B="myname";//can not redeclare a variable
B = "mynameis"; //can update value

const C="name"; //create a variable
//const C="myname";//can not redeclare a variable
C = "mynameis"; //can not update value
