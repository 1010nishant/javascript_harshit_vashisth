// for of loop in array
// typeof array is object
let arr = ["val1", "val2", "val3"]

for (let element in arr) {
    console.log(element);//give us index(key)
    
}
for (let element of arr) {
    console.log(element);//give us index's element(value)
    
}
const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits2 = [];

for(let fruit of fruits){
    fruits2.push(fruit.toUpperCase());
}
console.log(fruits2);

for(let i = 0; i<fruits.length; i++){
    console.log(fruits[i]);
}