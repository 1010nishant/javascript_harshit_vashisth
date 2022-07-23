const obj1 = {
    key1: "value1",
    key2: "value2"
}

//obj1 and obj2 both are different objects and both can't access their content means if we print obj2.key1 it give undifine what if we want that obj2 will able to access obj1 content means when we print obj2.key1 than it give value1 
//we can do this with Object.create method

const obj2 = {};// empty object 
obj2.key3 = "value3";






// __proto__

// offical ecmascript documentation 

// [[prototype]]

// __proto__ and [[prototype]] both same so never confused but prototype is different



// prototype  
const obj_1 = {
    key1: "value1",
    key2: "value2"
}  


const obj_2 = Object.create(obj_1); // {} empty object
// there is one more way to create empty object
obj_2.key3 = "value3";
obj_2.key2 = "unique";
console.log(obj_2);
//here we pass obj_1 to Object.create() method so it will make an empty Obj 
console.log(obj_2.key2);
console.log(obj_2.key1);
console.log(obj_2.key3);
//it solves above problem if we print obj_2.key1 than first it will find in obj_2 if key1 is in obj_2 than it will give us obj_2's key1 but if there is no key1 and it will find it obj_1 and return obj_1's key1 




//let's see how it's work
//it will execute with help of __proto__. __proto__ is empty object but when we pass any object in Object.create method than __proto__ will contain all content of that passing object we can see this behavior by trying console.log

//when we try to get any property of obj_2 than first it search that in it's object and if that property get found it get return with this property but if not that it will search in it's __proto__ obj_2 's proto is Obj_1 and that's how its work

//const obj_2 = Object.create(obj_1);// is line se obj_2 ka proto _obj_1 set ho jata hai

 




console.log(obj2.__proto__);//this give obj_1

