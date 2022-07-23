// Promise.resolve() ek value lega or return mein ek promise dega jo ki resolve hoga (jiski value hogi 5 in this case)
// Promise chaining

// const myPromise = Promise.resolve(5);
//for learn promise's mehtods like resolve , reject follow this link
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// myPromise.then(value=>{
  // we can also write Promise.resolve(5).then in above line
//   console.log(value);
// })




// then()
// then method hamesha promise return karta hai


function myPromise(){
  return new Promise((resolve, reject)=>{
    resolve("foo");
  })
}

myPromise()
  .then((value)=>{
    console.log(value);
    value += "bar";
    return value//yha value return nhi ho rhi yha ek promise return ho rha hai(internally somthing like that
    //return promise.resolve(value))
  })
  .then((value) =>{
    console.log(value);
    value += "baaz";
    return value;
  })
  .then(value=>{
    console.log(value);
  })


