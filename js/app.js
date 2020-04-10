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
var w = window.innerWidth;
if (w <= 600 && w >= 0) {


  document.getElementById("sec1").addEventListener("click", function(){
    document.getElementById("section1").scrollIntoView({ behavior: 'smooth', block: "end"});
  
  }) 
  
  document.getElementById("sec2").addEventListener("click", function(){
    
    document.getElementById("yee").scrollIntoView({ behavior: 'smooth', block: "end"});
  
  }) 
  
  document.getElementById("sec3").addEventListener("click", function(){
    
    document.getElementById("section3").scrollIntoView({ behavior: 'smooth', block: "end"});
  
  }) 
  

//Gotten some help from Stack Overflow


}
/**
 * Define Global Variables
 * 
*/

document.getElementById("sec1").addEventListener("click", function(){
  document.getElementById("section1").scrollIntoView({ behavior: 'smooth', block: 'center'});

}) 

document.getElementById("sec2").addEventListener("click", function(){
  
  document.getElementById("yee").scrollIntoView({ behavior: 'smooth', block: "center"});

}) 

document.getElementById("sec3").addEventListener("click", function(){
  
  document.getElementById("section3").scrollIntoView({ behavior: 'smooth', block: "center"});

}) 





/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

window.addEventListener('scroll', function(ev) {
//Gotten some help from Stack Overflow
//for each nav bar - sec1

   const secone = document.getElementById('section1');
   const distanceToTopOne = secone.getBoundingClientRect().top;
if(distanceToTopOne <= 200 && distanceToTopOne >= -178 ) {

document.getElementById("sec1")
.classList.add("active");
} else {

  document.getElementById("sec1")
  .classList.remove("active");

}



const sectwo = document.getElementById('section2');
const distanceToTopTwo = sectwo.getBoundingClientRect().top;
if(distanceToTopTwo <= 300 && distanceToTopTwo >= -478 ) {

document.getElementById("sec2")
.classList.add("active");
} else {

document.getElementById("sec2")
.classList.remove("active");

}



const secthr = document.getElementById('section3');
const distanceToTopThr = secthr.getBoundingClientRect().top;
if(distanceToTopThr <= 100 && distanceToTopThr >= -478 ) {

document.getElementById("sec3")
.classList.add("active");
} else {

document.getElementById("sec3")
.classList.remove("active");

}





});

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/









// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
