//ajax concept(XHR) using json 
//https://www.elated.com/json-basics/

// const URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();
// console.log(xhr);//XHR object
// // step1
// console.log(xhr.readyState);
// xhr.open("GET",URL);
// console.log(xhr.readyState);



// xhr.onreadystatechange = function(){
//     // console.log(xhr.readyState);
//     if(xhr.readyState === 4){
//         console.log(xhr)
//         const response = xhr.response;
//         const data = JSON.parse(response);
//         console.log(typeof data);
//     }
// }



//onload method tab hi chalega jab readystate 4 hogi means this is better code of above func. 
// xhr.onload = function(){

//     const response = xhr.response;
//
//     console.log(typeof response);//json String
//     const data = JSON.parse(response);//changing json to javascript's object
//     console.log(data);
//     console.log(typeof data);//Object
// }

// xhr.send();




// https://www.freecodecamp.org/news/ajax-tutorial/

//https://www.programiz.com/javascript/json

//https://javascript.info/xmlhttprequest