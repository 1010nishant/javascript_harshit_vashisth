// arrow functions 
// The handling of this is different in arrow functions compared to regular functions.
// with arrow functions there is no binding of this

const user1 = {
    firstName : "harshit",
    age: 8,
    about: () => {
        console.log(this.firstName, this.age);
    }   
}
user1.about();//output : undifined undifined
//in arrow function this is not reffering with surrounding,this is reffering to one level up of its surounding 

//use it like that
// user1.about(user1);