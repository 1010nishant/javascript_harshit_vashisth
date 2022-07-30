// fetch 

const URL = "https://jsonplaceholder.typicode.com/postssss";



// const whatisthis = fetch(URL)
// console.log(whatisthis);//promise(fetch is returning promise)



fetch(URL,{
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then(response =>{
        if(response.ok){
            return response.json()//returning promise
        }else{
            throw new Error("Something went wrong!!!")
        }
    })
    .then(data =>{
        console.log(data);
    })
    .catch(error =>{
        console.log("inside catch");
        console.log(error);
    })

    // https://www.geeksforgeeks.org/javascript-fetch-method/

    // https://www.freecodecamp.org/news/javascript-fetch-api-tutorial-with-js-fetch-post-and-header-examples/

//advance fetch api not done yet
    // https://www.freecodecamp.org/news/fetch-api-cheatsheet/
