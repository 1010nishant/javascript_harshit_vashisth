// ternary operator 

// let age = 4;
// let drink;

// if(age>=5){
//     drink = "coffee";
// }else{
//     drink = "milk";
// }

// console.log(drink);

// ternary operator / conditional operator 

// let age = 3;
// let drink = age >= 5 ? "coffee" : "milk";
// console.log(drink);

//ternary operator for many conditions
// condition ? true : condition ? true: condition ? : true : false
// const drink = 8;
// let check =  drink <= 5 ? "milk" : drink <= 10 ? "coffee" : "black coffee";
// console.log(check);


// short circuiting
// Since first operand is false and operator
// is AND, Evaluation stops and false is
// returned.
console.log(false && true && true && false)
  
// Whole expression will be evaluated.
console.log(true && true && true)
// Output:

// false
// true






// First operand is true and operator is ||, 
// evaluation stops and true is returned.
console.log(true || false || false)
  
// Evaluation stops at the second operand(true).
console.log(false || true || true || false)

// Output:

// true
// true


let name = "nishant"
let username = name || "user"// truthy || falsy
console.log(username);



// let email = true
// let phoneNum = "5453"
// let x = email && phoneNum 
// console.log(x);



let email = true
let phoneNum = "5453"
let x = (email && phoneNum) || "invalid"
console.log(x);


