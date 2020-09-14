// navbar and dropdown

$(function () {
    $(document).scroll(function () {
      var $nav = $("#mainNav");
      var $navLink = $(".nav-link");
     
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
      $navLink.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });


  });

  $('.navbar-nav li a').on('click', function () {
    if (!$(this).hasClass('dropdown-toggle')) {
      $('.navbar-collapse').collapse('hide');
    }
  });
// carousel

var ptoggle = document.getElementById("project-toggler");
function toggleSlide(x) {
  if (x.matches) { // If media query matches
   ptoggle.classList.toggle("slide");
  } else{
    ptoggle.classList.toggle("slide");
  }

}

var x = window.matchMedia("(max-width: 700px)");
toggleSlide(x); // Call listener function at run time
x.addListener(toggleSlide); // Attach listener function on state changes




// typing animation
  var greetBox = document.getElementById("typewriter");
var greeting = "Hello.";
greetBox.textContent = "";
var i = 0;
var bo = true;
var tog = true;
setInterval(function(){
    if(tog){ //will add toggle later
        greetBox.classList.toggle("class1");
        tog = false;
    }
   

if(!bo){
 
   
   if(i==0)
   {greetBox.textContent = greetBox.textContent.slice(0,i);
       bo = true;
      return;
     
   }
   greetBox.textContent = greetBox.textContent.slice(0,i);
   --i; 

    
}if(bo){

  
greetBox.textContent = greetBox.textContent + greeting[i];

++i;
if(i==6)
{
    bo = false;
    i=5;
  
}
} 


},500);