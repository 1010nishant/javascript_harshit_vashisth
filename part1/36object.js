// objects reference type  
// arrays are good but not sufficient 
// for real world data 
// objects store key value pairs 
// objects don't have index

// how to create objects 

// const person = {name:"Harshit",age:22};
const person = {
    name: "harshit",//typeof key is String by defult
    age: 22,
    hobbies: ["guitar", "sleeping", "listening music"],
    //if key has spaces in between txt then we have to write key in inverted comma other wise we get error
    "person's subkect": ["math","science"]
}
console.log(person);

// how to access data from objects 
// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person.hobbies);

// how to add key value pair to objects
person.gender = "male";//key is gender and value is male
person["surname"] = "sharma";//key is surname and value is sharma
console.log(person);

//it's good to use inverted comma