//single line comments

/*
Multiline 
comments
*/

// print message on console
console.log("Hello, World!");

// print message on webpage
document.write("Hello, World!");

//alert message
alert("Hello, World!");
window.alert("Javascript Session-2");

//variable
var x = 10;
var y = 20;
var z = 30;
console.log(x + y + z);

//take input from user
var name = prompt("Enter your name");
console.log(name);

myName = "Develearn";
console.log(myName); //output Develearn

document.write(myName);
document.write("<br>Hello Javascript<br>");

Hello = "\n Hello Students !! \n welcome to Javascript Class....<br>Hello";
document.write(Hello);

//display text on webpage within color
document.write(
  "<font color='red'>Hello Students !! welcome to Javascript Class....</font><br>"
);
document.write(
  "<font color='green'>Hello Students !! welcome to Javascript Class....</font><br>"
);
document.write(
  "<font color='blue'>Hello Students !! welcome to Javascript Class....</font><br>"
);
document.write(
  "<font color='yellow'>Hello Students !! welcome to Javascript Class....</font><br>"
);

//take input from user
var name = prompt("Enter your name");
var age = prompt("Enter your age");
var city = prompt("Enter your city");
console.log(
  "Hello" + name + " you are " + age + " years old and you are from " + city
);

//take user input with default value
var name = prompt("Enter your name", "Kavya");
var age = prompt("Enter your age", 20);
var city = prompt("Enter your city", "Mumbai");
console.log(
  "Hello" + name + " you are " + age + " years old and you are from " + city
);

//take user input with validation
var name = prompt("Enter your name");
var age = prompt("Enter your age");
var city = prompt("Enter your city");
if (age >= 18 && age <= 100) {
  console.log(
    "Hello" + name + " you are " + age + " years old and you are from " + city
  );
} else {
  console.log("Invalid age");
}

//take user input with validation and default value
var name = prompt("Enter your name", "Kavya");
var age = prompt("Enter your age", 20);
var city = prompt("Enter your city", "Mumbai");
if (age >= 18 && age <= 100) {
  console.log(
    "Hello" + name + " you are " + age + " years old and you are from " + city
  );
} else {
  console.log("Invalid age");
}

//variables
/*
In JavaScript, variables are used to store data values. 
They act as containers for data that can be referenced and manipulated throughout 
your code. Variables can hold different types of data, including strings, numbers, 
booleans, objects, arrays, and more.
*/
var name = "Develearn";
var age = 25;
var isMarried = true;
var isMarried = false;
console.log(isMarried);


//var, let & const (EcmaScript6)

/*
1. var
Scope: var is function-scoped or globally-scoped. 
If declared inside a function, it is accessible only within that function. 
If declared outside any function, it is accessible globally.
Redeclaration: Variables declared with var can be redeclared within the same scope 
without any error.

2. let
Scope: let is block-scoped, meaning it is only accessible within the block 
(enclosed by {}) in which it is defined. This includes loops, conditionals, 
and any other block.
Redeclaration: Variables declared with let cannot be redeclared in the same scope. 
Attempting to do so will result in a SyntaxError.

3. const
Scope: const is also block-scoped, similar to let.
Redeclaration: Variables declared with const cannot be redeclared or updated. 
They must be initialized at the time of declaration.
*/
var name = "Develearn";
let age1 = 25;
const isMarried1 = true;


