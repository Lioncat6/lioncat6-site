let slideIndex = 1;

function startSlides(){
  ssinterval = setInterval(() => {plusSlides(1)}, 10000);
  showSlides(slideIndex);
}

function clearSlideInt(){
  clearInterval(ssinterval);
  ssinterval = setInterval(() => {plusSlides(1)}, 10000);
}

function stopSlideChange(){
  clearInterval(ssinterval);
  console.log("Slide Change Stopped")
}

function resumeSlideChange(){
  ssinterval = setInterval(() => {plusSlides(1)}, 10000);
  console.log("Slide Change Resumed")
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  clearSlideInt()
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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

