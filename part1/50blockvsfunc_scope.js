// block scope vs function scope 


// let and const are block scope
// var is function scope 

// if(true){
//     var firstName = "harshit";
//     console.log(firstName);
// }

//console.log(firstName);

function myApp(){
    if(true){
        var firstName = "harshit";
        console.log(firstName);
    }

    if(true){
        console.log(firstName);
    }
    console.log(firstName);
}

myApp();
//block scope
//Variables declared inside a { } block cannot be accessed from outside the block
// Variables declared with the var keyword can NOT have block scope.

// Var declared inside a { } block can be accessed from outside the block


