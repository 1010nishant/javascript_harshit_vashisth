// function returning function 

function myFunc(){
    function hello(){
        return "hello world"
    }
    return hello;
    //we can also write hello function defination in return
}

const ans = myFunc();
console.log(ans());
//remember func pr func() are differnt func is whole function defination and func() is function calling means any return value or anything that function do