// map method 
// map() creates a new array from calling a function for every array element.

// map() calls a function once for each element in an array.

// map() does not execute the function for empty elements.

// map() does not change the original array.
// const numbers = [3,4,6,1,8];
//in map() function return is must without return it will give undefined
//for more understanding search on web

// const square = function(number){
//     return number*number;
// }

// const squareNumber = numbers.map((number, index)=>{
//     return index;
// });
// console.log(squareNumber);

const users = [
    {firstName: "harshit", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20},
]

const userNames = users.map((user)=>{
    return user.firstName;
});

console.log(userNames);
// forEach() and .map(): These are the methods that are used to iterate on an array, more technically they invoke the provided callback function for every element of an array.
// Syntax: 
// array.map(callback(element, index, arr), thisArg)
// Parameters: This method accepts five parameters as mentioned above and described below: 
 
// callback: This parameter holds the function to be called for each element of the array.
// element: The parameter holds the value of the elements being processed currently.
// index: This parameter is optional, it holds the index of the currentValue element in the array starting from 0.
// arr: This parameter is optional, it holds the complete array on which Array.every is called.
// thisArg: This parameter is optional, it holds the context to be passed as this to be used while executing the callback function. If the context is passed, it will be used like this for each invocation of the callback function, otherwise undefined is used as default.
// Return value: This method returns a new array created by using the values modified by the arg_function using the value from the original array. This function does not modify the original array on which this function is implemented.
// map() method, we can chain the other array Instance methods i.e returned value of the map() method invokes the next method in the chain.