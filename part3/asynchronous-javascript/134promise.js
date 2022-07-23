// Promise
console.log("script start");
const bucket = ['coffee', 'chips','vegetables','salt','rice'];



const friedRicePromise = new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
        resolve({value:"friedrice"});
    }else{
        reject("could not do it");
    }
})

// produce 



// consume 
// how to consume 

friedRicePromise.then(
    // jab promise resolve hoga 
    (myfriedRice)=>{
    console.log("lets eat ", myfriedRice);
    }
    ).catch(
        //jab promise reject hoga
    (error)=>{
        console.log(error)
    })


setTimeout(()=>{
    console.log("hello from settimeout")
},0)

for(let i = 0; i <=100; i++){
    console.log(Math.random(), i);
}

console.log("script end!!!!")




//https://www.freecodecamp.org/news/javascript-promise-tutorial-how-to-resolve-or-reject-promises-in-js/


//(promise is also part of async programming means promise is works like settimeout that they go first in web api and callback queue and than event loop thing exist and they wil push in call stack when call stack gets empty) all step that we learn in settimeout 


// but diffrance is that promise is get in microtask queue and it has higher priority than callback stack 

//https://betterprogramming.pub/what-is-the-microtask-queue-and-how-does-it-work-3b858ff2a270

//https://www.geeksforgeeks.org/what-is-the-difference-between-microtask-queue-and-callback-queue-in-asynchronous-javascript/