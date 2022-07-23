// nested destructuring 
const users = [
    {userId: 1,firstName: 'harshit', gender: 'male'},
    {userId: 2,firstName: 'mohit', gender: 'male'},
    {userId: 3,firstName: 'nitish', gender: 'male'},
]
let [user1, user2, user3] = users;
//user1 give us Object of depend on declared order same for other
console.log(user1);
const [{firstName: user1firstName, userId}, , {gender: user3gender}] = users;
console.log(user1firstName);
console.log(userId);
console.log(user3gender);
//nested destructuring syntax and behaviour is same as arr and obj destructuring