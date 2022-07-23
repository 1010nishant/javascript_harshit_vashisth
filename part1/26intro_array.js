// intro to arrays 
// reference type(later explain) 
// how to create arrays

// ordered collection of items 

// let fruits = ["apple", "mango", "grapes"];
// let numbers = [1,2,3,4];
// let mixed = [1,2,2.3, "string", null, undefined];
// console.log(mixed);
// console.log(numbers);
// console.log(fruits[2]);
let fruits = ["apple", "mango", "grapes"];
let obj = {}; // object literal
// console.log(fruits);
// fruits[1] = "banana";
// console.log(fruits);
console.log(typeof fruits);//object
console.log(typeof obj);//object
console.log(Array.isArray(fruits));//this menthod gives clear confirmation on array gives true
console.log(Array.isArray(obj));// gives false


// array indexing 

// the indices of arrays are objects keys.
// Since arrays are objects, the array elements are stored by reference. Hence, when an array value is copied, any change in the copied array will also reflect in the original array. For example,
// You can also store values by passing a named key in an array. For example,
// Hence in JavaScript, you should use an array if values are in ordered collection. Otherwise it's better to use object with { }.