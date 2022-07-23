// array destructuring 
//To illustrate destructuring, we'll make a sandwich. Do you take everything out of the refrigerator to make your sandwich? No, you only take out the items you would like to use on your sandwich.

//Destructuring is exactly the same. We may have an array or object that we are working with, but we only need some of the items contained in these.

//Destructuring makes it easy to extract only what is needed.
const myArray = ["value1", "value2", "value3","value4"];
// Here is the old way of assigning array items to a variable
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);
// new way of assigning array items to a variable
let [myvar1, myvar2, ...myNewArray] = myArray;//myvar1 , myvar2 are new variable and mynewArray is new array
// When destructuring arrays, the order that variables are declared is important.

console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2);
console.log(myNewArray);
// If we only want the car and suv we can simply leave out the truck but keep the comma:

const vehicles = ['mustang', 'f-150', 'expedition'];

const [car,, suv] = vehicles;