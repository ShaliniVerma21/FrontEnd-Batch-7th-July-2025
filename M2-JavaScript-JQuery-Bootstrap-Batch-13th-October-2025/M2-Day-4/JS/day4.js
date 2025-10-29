//Datatypes

/*
JavaScript supports several data types that can be categorized into primitive types 
and non-primitive types (objects). These data types allow developers to handle different kinds of data 
in their applications.
data types are the classifications of data that determine the kind of operations that can be performed on them. 
JavaScript is a dynamically typed language, meaning that variables can hold values of any type and can change 
types during execution.
*/

let firstName = "Roshni"; //string
let myAge = 16; //number
let isFollow = true; //boolean

//Dynamic types Variable(value can be changed dynamically)
let first = "One"; // it is string
first = 1; // now it's Number
console.log(typeof first);

//1. Primitive Data Types
//Primitive data types are the most basic data types in JavaScript.

// BigInt (ES11)
/*
A numeric type that can represent integers with arbitrary precision.
It is created by appending n to the end of an integer. 
*/
let xyz = BigInt("123456789012345678901234567890"); //bigint

// Numbers:
let age = 25; // Integer
let price = 19.99; // Floating-point number

//Exponential Notation of a number
let num1 = 98e4; // 980000
let num2 = 98e-4; // 0.0098

// Strings:
let color = "Yellow";
let lastName = "Johnson";
let hey = "welcome to session";
let name1 = "Develearn"; // String
let greeting = `Hello, my name is ${firstName} ${lastName}`; //template literals
console.log(greeting);
let templateLiteral = `Hello, ${name}`; // Template literal
console.log(templateLiteral);

// Symbol (ES6)
//A unique and immutable primitive value that can be used as the key of an object property.
let sym1 = Symbol("my symbol");
const uniqueId = Symbol("id"); // Symbol

// Booleans
let x1 = true;
let y = false;

//undefined
//indicates that a variable has not been assigned a value, or not declared at all.
let property = undefined;
let job = undefined;
let x2; // x2 is declared but not assigned
console.log(x2); // Output: undefined

//null
//often used to represent the absence of any object value.
let money = null;
let food = null;
let y1 = null; // y1 is explicitly set to null

/*
 undefined means a variable has been declared but has not yet been assigned a value, 
 whereas null is an assignment value, meaning that a variable has been declared and 
 given the value of null .
*/

//2. Reference Data Types
//Reference data types are more complex and include objects, arrays, and functions.

/*a. Object
A collection of key-value pairs. Objects can hold multiple values and can be created using object 
literals or the new Object() syntax.*/

//1. person object
let person = {
  name: "John",
  age: 30,
  occupation: "Software Engineer",
  hobbies: ["reading", "hiking", "coding"],
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
};

//access data
console.log(person.name); // Output: John
console.log(person["name"]); // Output: John
console.log(person.hobbies[0]); // Output: reading
console.log(person.address.street); // Output: 123 Main St

//2. Product Object
const product = {
    name: "Laptop",
    brand: "Dell",
    price: 799.99,
    inStock: true
};

// Accessing properties
console.log(product.name); // Output: Laptop
console.log(product.price); // Output: 799.99

// 3. Book Object
const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    yearPublished: 1960,
    genre: "Fiction"
};

// Accessing properties
console.log(book.title); // Output: To Kill a Mockingbird
console.log(book.author); // Output: Harper Lee

// 4. Car Object
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2021,
    color: "Blue"
};

// Accessing properties
console.log(car.make); // Output: Toyota
console.log(car.year); // Output: 2021

// 5. Animal Object
const animal = {
    species: "Dog",
    name: "Buddy",
    age: 5,
    breed: "Golden Retriever"
};

// Accessing properties
console.log(animal.name); // Output: Buddy
console.log(animal.breed); // Output: Golden Retriever

//6. Movie Object
const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    genre: "Science Fiction"
};

// Accessing properties
console.log(movie.title); // Output: Inception
console.log(movie.director); // Output: Christopher Nolan

//7. Recipe Object
const recipe = {
    name: "Pancakes",
    servings: 4,
    ingredients: ["Flour", "Milk", "Eggs", "Sugar"],
    instructions: "Mix all ingredients and cook on a hot griddle."
};

// Accessing properties
console.log(recipe.name); // Output: Pancakes
console.log(recipe.ingredients); // Output: ["Flour", "Milk", "Eggs", "Sugar"]


/*
b. Array or Array Objects
A special type of object that holds an ordered list of values. Arrays can hold values of any type.
*/

//1. Simple Array of Fruits
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
// Accessing elements
console.log(fruits[0]); // Output: Apple
console.log(fruits[2]); // Output: Cherry

//2. Array of Numbers
const numbers = [10, 20, 30, 40, 50];
// Accessing elements
console.log(numbers[1]); // Output: 20
console.log(numbers.length); // Output: 5 (number of elements in the array)

//3. Array of Objects
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
// Accessing properties of objects in the array
console.log(people[0].name); // Output: Alice
console.log(people[1].age); // Output: 30

//4. Array of Mixed Data Types
const mixedArray = [42, "Hello", true, null, { key: "value" }, [1, 2, 3]];
// Accessing elements
console.log(mixedArray[1]); // Output: Hello
console.log(mixedArray[4].key); // Output: value
console.log(mixedArray[5][1]); // Output: 2 (accessing nested array)


