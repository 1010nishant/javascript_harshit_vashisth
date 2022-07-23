// function returning promise

function ricePromise(){
  const bucket = ['coffee', 'chips','vegetables','salts','rice'];
  return new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
        resolve({value:"friedrice"});
    }else{
        reject("could not do it");
    }
  })
}

//see that diffrance we write ricePromise() because we have to call the function
ricePromise().then(
  // jab promise resolve hoga 
  (myfriedRice)=>{
  console.log("lets eat ", myfriedRice);
  }
  ).catch(
  (error)=>{
      console.log(error)
  })