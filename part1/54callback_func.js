// callback functions 
// A callback is a function passed as an argument to another function

// This technique allows a function to call another function

// A callback function can run after another function has finished
// JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.
function myFunc2(name){
    console.log("inside my func 2")
    console.log(`your name is ${name}`);
}
//we can give parameter name anything but by convention it is good to having name callback for callback function
function myFunc(callback){
    console.log("hello there I am a func and I can..")
    callback("harshit");
}


myFunc(myFunc2);
//Object related
//if we write
//console.log({name:"nishant"})
//it's an object in output