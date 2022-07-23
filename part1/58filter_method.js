// filter method 

const numbers = [1,3,2,6,4,8];



const evenNumbers = numbers.filter((number)=>{
    return number % 2 === 0;
});
console.log(evenNumbers);

// filter() Syntax
// The syntax of the filter() method is:

// arr.filter(callback(element), thisArg)
// Here, arr is an array.

// filter() Parameters
// The filter() method takes in:

// callback - The test function to execute on each array element; returns true if element passes the test, else false. It takes in:
// element - The current element being passed from the array.
// thisArg (optional) - The value to use as this when executing callback. By default, it is undefined.
// filter() Return Value
// Returns a new array with only the elements that passed the test.
// Notes:

// filter() does not change the original array.
// filter() does not execute callback for array elements without values.