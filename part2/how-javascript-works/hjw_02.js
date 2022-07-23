// hoisting
// Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration
// https://www.programiz.com/javascript/hoisting
//search on web for better understanding
console.log(this);
console.log(window);
console.log(myFunction);
myFunction();

console.log(fullName);//output undefined 

function myFunction(){
    console.log("this is my function");
}

var firstName = "Harshit";
var lastName = "Sharma"
var fullName = firstName + " " + lastName;
console.log(fullName);