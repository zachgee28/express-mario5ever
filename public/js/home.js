var slidePosition = 1;
SlideShow();
var autoSlide = setInterval(SlideShow, 4000);

// forward/Back controls
function plusSlides(n) {
  clearInterval(autoSlide);
  slidePosition--;
  slidePosition += n
  SlideShow();
  autoSlide = setInterval(SlideShow, 4000);
}

//  images controls
function currentSlide(n) {
  clearInterval(autoSlide);
  slidePosition = n;
  SlideShow();
  autoSlide = setInterval(SlideShow, 4000);
}

function SlideShow() {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  console.log("First pass slidePosition: " + slidePosition);
  if (slidePosition > slides.length) {slidePosition = 1}
  if (slidePosition < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  console.log(slidePosition);
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
  slidePosition++;
} 