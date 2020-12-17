var slideIndex = 1;
//displays the carousel slides, starting from slide 1
showSlides(slideIndex);

//function to move to next slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}
//function to move to previous slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}
//hides all the slides except the one that is set to active
function showSlides(n) {
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
  //changes color of active and inactive dots
  dots[slideIndex-1].className += " active";
}
