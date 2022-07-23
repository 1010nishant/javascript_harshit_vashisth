// function expression 
// function singHappyBirthday(){
//     console.log("happy birthday to you ......");
// }

const singHappyBirthday = function(){
    console.log("happy birthday to you ......");
}

// singHappyBirthday();

const sumThreeNumbers = function(number1, number2, number3){
    return number1 + number2 + number3;
}
// const ans = sumThreeNumbers(2,3,4);
// console.log(ans);
// console.log(sumThreeNumbers);//this on will give us whole functon declaration
console.log(sumThreeNumbers(2,3,4));//this will give us 9


// function isEven(number){
//     return number % 2 === 0;
// }
const isEven = function(number){
    return number % 2 === 0;
}
// console.log(isEven(2));

const firstChar = function(anyString){
    return anyString[0];
}

const findTarget = function(array, target){
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}