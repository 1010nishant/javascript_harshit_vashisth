// let keyword 
// declare variable with let keyword 
//was introduced in es6
// Variables defined with let cannot be redeclared but reassigning possible
//block scope
//mostly developer use let 90%

let firstName = "Nishant jangid";
// let firstName  = "nishant"; //this will give error --> cannot be redeclared

// change value
firstName = "Mohit";
console.log(firstName); // print -- Mohit


// block scope vs funtion scope (covered later)