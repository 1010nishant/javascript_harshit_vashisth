// param destructuring 

// object 
// react 

const person = {
    firstName: "harshit",
    gender: "male",
    age: 500,
    
}

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
//     console.log(obj.surname);
//if surname is not in OBjecr than it will give undifined
// }

//if we want to do destructuring than we can do this in parameter or in paranthisis
//how to do destructuring we already learn
function printDetails({firstName, gender, age}){
    console.log(firstName);
    console.log(gender);
    console.log(age);
}

printDetails(person);