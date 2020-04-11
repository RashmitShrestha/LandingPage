/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/






var para = document.createElement("ul");
var element = document.getElementById("navbar__menu");
element.appendChild(para);
document.getElementsByTagName("ul")[1].setAttribute("id", "template");

var para1 = document.createElement("li");
var element1 = document.getElementById("template");
element1.appendChild(para1);


var para2 = document.createElement("li");
var para3 = document.createElement("li");
var para4 = document.createElement("li");


element1.appendChild(para2);
element1.appendChild(para3);
element1.appendChild(para4);


//making button section
var button1 = document.createElement("button");
var button2 = document.createElement("button");
var button3 = document.createElement("button");
var button4 = document.createElement("button");


document.getElementsByTagName("li")[3].appendChild(button1);
document.getElementsByTagName("li")[4].appendChild(button2);
document.getElementsByTagName("li")[5].appendChild(button3);
document.getElementsByTagName("li")[6].appendChild(button4);


document.getElementsByTagName("button")[3].setAttribute("id", "1sec1");
document.getElementsByTagName("button")[4].setAttribute("id", "1sec2");
document.getElementsByTagName("button")[5].setAttribute("id", "1sec3");
document.getElementsByTagName("button")[6].setAttribute("id", "1sec4");

document.getElementsByTagName("button")[3].classList.add("first");
document.getElementsByTagName("button")[4].classList.add("first");
document.getElementsByTagName("button")[5].classList.add("first");
document.getElementsByTagName("button")[6].classList.add("first");

tnode1 = document.createTextNode("Section 1")
tnode2 = document.createTextNode("Section 2")
tnode3 = document.createTextNode("Section 3")
tnode4 = document.createTextNode("Section 4")

document.getElementsByTagName("button")[3].appendChild(tnode1)
document.getElementsByTagName("button")[4].appendChild(tnode2)
document.getElementsByTagName("button")[5].appendChild(tnode3)
document.getElementsByTagName("button")[6].appendChild(tnode4)





















document.getElementById("1sec1").addEventListener("click", function(){
  document.getElementById("section1").scrollIntoView({ behavior: 'smooth', block: 'center'});

}) 

document.getElementById("1sec2").addEventListener("click", function(){
  
  document.getElementById("yee").scrollIntoView({ behavior: 'smooth', block: "center"});

}) 

document.getElementById("1sec3").addEventListener("click", function(){
  
  document.getElementById("section3").scrollIntoView({ behavior: 'smooth', block: "center"});

}) 

document.getElementById("1sec4").addEventListener("click", function(){
  
  document.getElementById("section4").scrollIntoView({ behavior: 'smooth', block: "center"});

}) 



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//https://codepen.io/ivanmt07/pen/pxONrw helped a little
window.addEventListener('scroll', function(ev) {
//Gotten some help from Stack Overflow
//for each nav bar - sec1

   const secone = document.getElementById('section1');
   const distanceToTopOne = secone.getBoundingClientRect().top;
if(distanceToTopOne <= 200 && distanceToTopOne >= -178 ) {

document.getElementById("1sec1")
.classList.add("active");
} else {

  document.getElementById("1sec1")
  .classList.remove("active");

}



const sectwo = document.getElementById('section2');
const distanceToTopTwo = sectwo.getBoundingClientRect().top;
if(distanceToTopTwo <= 300 && distanceToTopTwo >= -478 ) {

document.getElementById("1sec2")
.classList.add("active");
} else {

document.getElementById("1sec2")
.classList.remove("active");

}



const secthr = document.getElementById('section3');
const distanceToTopThr = secthr.getBoundingClientRect().top;
if(distanceToTopThr <= 100 && distanceToTopThr >= -478 ) {

document.getElementById("1sec3")
.classList.add("active");
} else {

document.getElementById("1sec3")
.classList.remove("active");

}

const secfou = document.getElementById('section4');
const distanceToTopFou = secfou.getBoundingClientRect().top;
if(distanceToTopFou <= 100 && distanceToTopFou >= -478 ) {

document.getElementById("1sec4")
.classList.add("active");
} else {

document.getElementById("1sec4")
.classList.remove("active");

}






});

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
