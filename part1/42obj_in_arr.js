// objects inside array 
// very useful in real world applications

const users = [
    {userId: 1,firstName: 'harshit', gender: 'male'},
    {userId: 2,firstName: 'mohit', gender: 'male'},
    {userId: 3,firstName: 'nitish', gender: 'male'},
]
console.log(users);//unique output

for(let user of users){
    console.log(user);///unique output
    console.log(user.firstName);//unique output
}
