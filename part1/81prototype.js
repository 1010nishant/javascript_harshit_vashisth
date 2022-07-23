function hello(){
    console.log("hello world");
}
// Every function includes prototype object by default
// javascript' function is ===> function  + object 
//we can treat fuctions like a object


//name is already define property in js it will give func. name
// console.log(hello.name);// hello

// you can add your own properties like object
// hello.myOwnProperty = "very unique value";
// console.log(hello.myOwnProperty);

// name property ---> tells function name;

// function provides more useful properties.

//func. give us empty Object like func. give us free space


// console.log(hello.prototype); // constrctor but we can say an empty object means free space

// only functions provide prototype property

// hello.prototype.abc = "abc";
// hello.prototype.xyz = "xyz";
// hello.prototype.sing = function(){
//     return "lalalla";
// };
// console.log(hello.prototype.sing());

//protoype ko hum ek empty object ki tarah samajh sakte hai jo sirf function provide karate hai or hum object ki tarah isme properties define kar skte hai

//prototype and __proto__ are different proto chain create kar rha tha and prototype ek empty object ke jase hai but we can create a relation between them look in 82