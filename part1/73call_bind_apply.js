function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);
}
const user1 = {
    firstName : "harshit",
    age: 8, 
    intro : function() {
         console.log(`my name is ${this.firstName} and my age is ${this.age}`)}

}
const user2 = {
    firstName : "mohit",
    age: 9,
    
}
//call method 
// Call is a function that helps you change the context of the invoking function. In layperson's terms, it helps you replace the value of 'this' inside a function with whatever value you want.
user1.intro.call(user2,);
about.call(user1,"painting", "shiv")

// Apply is very similar to the call function. The only difference is that in apply you can pass an array as an argument list.
// apply
// about.apply(user1, ["guitar", "bach"]);


//Bind is a function that helps you create another function that you can execute later with the new context of this that is provided.
// const func = about.bind(user2, "guitar", "bach");
// func();



// https://www.freecodecamp.org/news/understand-call-apply-and-bind-in-javascript-with-examples/