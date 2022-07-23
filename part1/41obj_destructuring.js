// object destructuring
// const band = {
//   bandName: "led zepplin",
//   famousSong: "stairway to heaven",
//   year: 1968,
//   anotherFamousSong: "kashmir",
// };

// let { bandName, famousSong, ...restProps } = band;//bandName,famisSong are new variable type of let and restProps is Object contains rest properties of band  
// console.log(bandName);
// console.log(restProps);

const person = {
  "name": "nishant jangid",
  age : 20,
  "fruit name": ["mango","orange","apple"]
};
let { name:naam , age} = person ;//now name is not variable ,variable is naam short syntax of above thing
// let naam = name;
console.log(naam);
