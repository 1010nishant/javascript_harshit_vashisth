// select element using query selector work for both class and id and also tags

// const mainHeading = document.getElementById("main-heading");
const mainHeading = document.querySelector("#main-heading");
const header = document.querySelector(".header");
const navItem = document.querySelector(".nav-item")//it give first .nav-item 
const navItemall = document.querySelectorAll(".nav-item")//it give all .nav-item
console.log(navItem);