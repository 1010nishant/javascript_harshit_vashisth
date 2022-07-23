// array push pop 

// array shift unshift 

let fruits = ["apple", "mango", "grapes"];
console.log(fruits);
// push 
// The push() method adds an element at the end of the array
// fruits.push("banana");
// console.log(fruits);
// pop 
// You can use the pop() method to remove the last element from an array. The pop() method also returns the returned value
// let poppedFruit = fruits.pop();
// console.log(fruits);
// console.log("popped fruits is", poppedFruit);

// unshift 
// The unshift() method adds an element at the beginning of the array
// fruits.unshift("banana");
// fruits.unshift("myfruit");
// console.log(fruits);

// shift 
// If you need to remove the first element, you can use the shift() method. The shift() method removes the first element and also returns the removed element
// let removedFruit = fruits.shift();
// console.log(fruits);
// console.log("removed fruits is ", removedFruit);

// You can also add elements or change the elements by accessing the index value

let dailyActivities = [ 'eat', 'sleep'];

// this will add the new element 'exercise' at the 2 index
dailyActivities[2] = 'exercise';

console.log(dailyActivities); // ['eat', 'sleep', 'exercise']

// Suppose, an array has two elements. If you try to add an element at index 3 (fourth element), the third element will be undefined