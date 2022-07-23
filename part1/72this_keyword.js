//this keyword refers to an object Which object depends on how this is being invoked (used or called).
// The this keyword refers to different objects depending on how it is used
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

//   In an object method, this refers to the object.
// Alone, this refers to the global object In a browser window the global object is [object Window] .
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.


// strict mode, when used alone, this also refers to the global object


// console.log(window);
// "use strict";
// function myFunc(){
    
//     console.log(this);
// }
// myFunc();

//for better understanding search on web