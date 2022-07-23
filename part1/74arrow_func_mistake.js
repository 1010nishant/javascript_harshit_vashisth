
const user1 = {
    firstName : "harshit",
    age: 8,
    about: function(){
        console.log(this.firstName, this.age);
    }   
}

 

// user1.about();//output : harshit 8

// don't do this mistake
let detail = user1.about;//this will store whole func. defination means now this is not reffering user1 object
detail();// output : undifined undifined


//do this
// const myFunc = user1.about.bind(user1);
// myFunc();