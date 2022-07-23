// Maps
// map is an iterable

// store data in ordered fashion(order gurrented)

// store key value pair (like object)
// Map holds key-value pairs where the keys can be any datatype unlike Object
// duplicate keys are not allowed like objects


// different between maps and objects

// objects can only have string or symbol
// as key 

// in maps you can use anything as key
// like array, number, string 

// object literal 
// key -> string or in symbol

// const person = {
//     firstName : "harshit",
//     age: 7,
//     1:"one"// here 1 is in String
// }
// // console.log(person.firstName);
// // console.log(person["firstName"]);
// // console.log(person[1]);
// for(let key in person){
    
//     console.log(typeof key);
// }

// key value pair 
// add elements to a Map with the set() method set() method can also be used to change existing Map values
// get() method gets the value of a key in a Map
// const person = new Map();
// person.set('firstName', 'Harshit');//firstName is  key Harshit is value
// person.set('age', 7);
// person.set(1,'one');//here 1 is in number
// person.set([1,2,3],'onetwothree'); [1,2,3] is key typeof array and value is onetwothree
// person.set({1: 'one'},'onetwothree');


// console.log(person);
//output in console
// Map(3)  {"firstName" => "Harshit","age" => 7, 1 => "one", [1,2,3] => "onetwothree", {1:"one"} => "onetwothree"}





// console.log(person.get(1));//output  "one"
//person.keys() give all keys in array
// for(let key of person.keys()){
//     console.log(key, typeof key);//type of = Object same as array
// }
// for(let [key, value] of person){
    // here key in array so we can destructuring like arrays see this above in for of
    //here output in array we can confirm it by array.isArray it will give true
//     // console.log(Array.isArray(key));
//     console.log(key, value)
// }

const person1 = {
    id: 1,
    firstName: "harshit"
}
const person2 = {
    id: 2,
    firstName: "harshta"
}

const extraInfo = new Map();
extraInfo.set(person1, {age: 8, gender: "male"});//here person1 Object is key and {age: 8, gender: "male"} is value for better understanding do console
extraInfo.set(person2, {age: 9, gender: "female"});
// console.log(extraInfo);

console.log(person1.id);
console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person2).gender);



// You can create a Map by passing an Array to the new Map() constructor:

// Example
// // Create a Map
// const fruits = new Map([
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200]
// ]);
   
// size property returns the number of elements in a Map
// fruits.size


//for better understanding search on web