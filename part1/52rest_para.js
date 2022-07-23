// rest parameters 

// function myFunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is`, c);
// }
//here ...c become an array and it contain all other element expect a and b ki value
// myFunc(3,4,5,6,7,8,9);

function addAll(...numbers){
    let total = 0;
    for(let number of numbers){
        total = total + number;
    }
    return total;
}
//here...numbers will help to pass as many as parameter and func. givws us addition of all parameter
const ans = addAll(4,5,4,2,10);
console.log(ans);