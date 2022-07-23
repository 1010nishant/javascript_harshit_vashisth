// how to iterate object 

const fruits = {
    "name": "nishant jangid",
    age : 20,
    "fruit name": ["mango","orange","apple"]
}
let newkey = "email"
fruits[newkey]  = "nishantjangid@gmail.com"
//fruits[newkey] newkey is without "" so the name of key will be email
//If we worte like fruits["newkey"] then the name of key will be newkey
for(let fruit in fruits){
    //it will give keys of fruits not key's value
    console.log(fruit)
    //now it will give key's value
    console.log(fruits[fruit])

    console.log(`${fruit} : ${fruits[fruit]}` )
}
//Object.keys method to itrate object
console.log(Object.keys(fruits)); // return an array of keys
const prov = typeof(Object.keys(fruits))
// typeof array is Object but doesn't mean Object and array are same 
// Array.isArray method confirms this
// if we pass array for test it will give true else in case of object it gives false
let pr = Array.isArray(Object.keys(fruits)) //output true
console.log(prov);
console.log(pr);
for(let fruit of Object.keys(fruits)){
    //Oject.keys(fruits) is an array
    console.log(fruit)
    console.log(fruits[fruit])
    console.log(fruit , " : " , fruits[fruit]);
}