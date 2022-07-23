// 2015 / es6 
// class keyword 
// class work same as we learn in 83 we can 83 code like below
//same working enternally
//same as in java language   class , constructor and Object making work
class CreateUser{
    constructor(firstName, lastName, email, age, address){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }

    about(){
        return `${this.firstName} is ${this.age} years old.`;
    }
    is18(){
        return this.age >= 18;
    }
    sing(){
        return "la la la la ";
    }
    whatPrint(name){
         console.log(name);
    }

}


const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
user1.whatPrint("nishant");
// console.log(Object.getPrototypeOf(user1));

