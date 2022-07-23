//difference between 77 and 78 files is that in 78 functions are outside the createuser because it make it more optimised 
//in 78 functions are called by referance not by value
//means in 77 functions will create every time when createuser is called so it cause memory allocation in 78 it will not happan because memory will create only one time


const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18;
    }
}
function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    return user;
}

const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 9, "my address");
const user2 = createUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
console.log(user1.about());
console.log(user3.about());


//let assume we need many functions for obj(user) for that we need to difine them in userMethods and than in createUser what if we forget to add that function in createUser 
//for this problem we can use Object.create method 