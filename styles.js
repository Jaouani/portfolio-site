////////////////fullscreen nav bar
/* Open */
function openNav() {
	document.getElementById("javascript").style.overflow = "hidden";
    document.getElementById("full-screen").style.display = "block";
    document.getElementById("full-screen").style.height = "100%";
}

/* Close */
function closeNav() {    
	document.getElementById("javascript").className = "overflow-y";
    document.getElementById("full-screen").style.display = "none";
    document.getElementById("full-screen").style.height = "0%";
}
////////////////witte navbar
window.onscroll = function() {scrollnavbar()};

function scrollnavbar() {

    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {

    	document.getElementById("scroll1").className = "";
    	document.getElementById("scroll2").className = "";    	
        document.getElementById("scroll1").className = "scroll-navbar";
        document.getElementById("scroll2").className = "scroll-navbar";
        document.getElementById("home").style.margin = "100px 0px 0px 0px";
        document.getElementById("scroll1").style.height = "70px";
        document.getElementById("scroll2").style.height = "70px";
    }
    else 
    {

    	document.getElementById("scroll1").className = "";
    	document.getElementById("scroll2").className = "";
    	document.getElementById("scroll2").className = "hidden";
    	document.getElementById("scroll1").className = "verdwijnen";
        document.getElementById("home").style.margin = "0px 0px 0px 0px";
        document.getElementById("scroll1").style.height = "100px";
        document.getElementById("scroll2").style.height = "100px";


    }
}
////////////////slide show
var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  document.getElementById("show").style.display = "none";
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
