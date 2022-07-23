// hoisting (later explain)
// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function)
// hello();
//using function before declaration will work but it will give error in func. expression and arrow func.
// function hello(){
//     console.log("hello world");
// }
// console.log(hello1);//error
// const hello1 = "hello world";
// console.log(hello1);
// console.log(hello1);//error
// let hello1 = "hello world";
// console.log(hello1);
// console.log(hello1);//not error output undefined
// var hello1 = "hello world";
// console.log(hello1);
// console.log(hello1);// error 
// hello1 = "hello world";
// console.log(hello1);
