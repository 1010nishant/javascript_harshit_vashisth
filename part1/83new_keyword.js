function phone(brand,modelname,color) {
    // this ={} somthing like that
    this.brand = brand;
    this.modelname = modelname;
    this.color = color;
   
}


const phone1 = new phone("apple", "se2", "white");

console.log(phone1);//print object(whole func. as an Object jisme __proto__ bhi include hai)

// new keyword yaha pe ek empty object set kar dega jis ko this keyword reffer karta hai(like this = {}) or wo saare key value pay usme add kar dega or usko return bhi kaarta hai means ab hum function ko Object ki tarah bhi treat kar skte hai jaise key value add karna 
console.log(phone1.color)//white
phone1.height = 4.5;
console.log(phone1.height);



//function prototype jo ki previous file mein humne dekha 
phone.prototype.ring = function(){
    console.log("ring ring ring");
}
// new keyword se hum ab prototype ki property bhi access kar skte hai
//basically new keyword Object.create(createUser.prototype);(ye humne 82 file mein dekha) kuch is tarah ka hi behave karta hai means jo bhi 
//means jo bhi hum previous kuch files se karte aa rahe hai (in 79,80,81,82) basiclly related to Object.create(createUser.prototype); this , new keyword can do that





// new keyword 
// 1.) set an object this = {}
// 2.) return {} 
//




// __proto__ 
// // official ecmascript document
// [[prototype]]

// constructor function because it construct Object for us
// function CreateUser(firstName, lastName, email, age, address){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
// }
// CreateUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old.`;
// };
// CreateUser.prototype.is18 = function (){
//     return this.age >= 18; 
// }
// CreateUser.prototype.sing = function (){
//     return "la la la la ";
// }


// const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
// const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
// const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
// console.log(user1);
// console.log(user1.is18());


//campare 82 and 83 code 
//in this file there is no link like Object.create(createUser.prototype); new keyword ye apne aap karta hai matlab jo property new keyword ko same func. mein nhi milti fir new keyword usko prototype mein bhi dundta hai
//anotheer diffrance that in 82 file func. obj ko return kaar rha tha lekin in new keyword hume already new this Obj ko return karta hai


//82 and 83 code functionlity is same