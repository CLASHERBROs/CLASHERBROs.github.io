$(function () {
    $(document).scroll(function () {
      var $nav = $("#mainNav");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });


  });

  $('.navbar-nav li a').on('click', function () {
    if (!$(this).hasClass('dropdown-toggle')) {
      $('.navbar-collapse').collapse('hide');
    }
  });


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
   
// console.log(greeting[i]);
if(!bo){
 
   
   if(i==0)
   {greetBox.textContent = greetBox.textContent.slice(0,i);
       bo = true;
      return;
     
   }
   greetBox.textContent = greetBox.textContent.slice(0,i);
   --i; 

    
}if(bo){

    console.log(i);
greetBox.textContent = greetBox.textContent + greeting[i];

++i;
if(i==6)
{
    bo = false;
    i=5;
  
}
} 


},500);