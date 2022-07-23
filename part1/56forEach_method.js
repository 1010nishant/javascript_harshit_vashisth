// important array methods 

 const numbers = [4,2,5,8];

// function myFunc(number, index){
//     console.log(`index is ${index} number is ${number}`);
// }
//forEach works same as for loop travasing
//numbers.forEach(myFunc)


// numbers.forEach(function(number,index){
//     console.log(`index is ${index} number is ${number}`);
// });

// numbers.forEach(function(number, index){
//     console.log(number*3, index);
// })


const users = [
    {firstName: "harshit", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20},
]
//here function(user) is annomnyous func.
// users.forEach(function(user){
//     console.log(user.firstName);
// });

// users.forEach((user, index)=>{
//     console.log(user.firstName, index);
// })

// for(let user of users){
//     console.log(user.firstName);
// }

// The forEach() method doesn’t return anything hence the method chaining technique cannot be applied here. 
// forEach() method does not create a new array based on the given array.
// forEach() method returns “undefined“.


