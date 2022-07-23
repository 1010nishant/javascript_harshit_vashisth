// select element using get element by id
document.getElementById("main-heading");//only work for id
document.getElementsByClassName('anyclass')//only work for class
document.getElementsByTagName("tagname")//only work for tag

console.dir(document.getElementById("main-heading"));//this give raw information type is Object

const mainHeading = document.getElementById("main-heading");//html readable information
console.log(mainHeading);

//search on web for more document or windows methods