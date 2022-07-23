// spread operator
// const array1 = [1, 2, 3];
// const array2 = [5, 6, 7];

// // const newArray = [...array1, ...array2, 89, 69];
// const newArray = [..."123456789"];//this spread every single digit of number as an element of an array and return this array
// console.log(newArray);

// spread operator in objects
const obj1 = {
  key1: "value1",
  key2: "value2",
  key1: "value11"
};
const obj2 = {
  key1: "valueUnique",
  key3: "value3",
  key4: "value4",
};

const newObject = { ...obj2, ...obj1, key69: "value69" };//look that obj1 & obj2 have key1 with different value but in output there is one key1 shows with one value which is aftermost time assign

// const newObject = { ...["item1", "item2"] }; same as below but value is item1 and item2
// const newObject = { ..."abcdefghijklmnopqrstuvwxyz" };//this spread every single digit of number as an value of an Object and key is 0,1,2,....
console.log(newObject);
