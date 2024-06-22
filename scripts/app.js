// Fade in and out on Scroll 
const observer = new IntersectionObserver ((entries) => {
    entries.forEach(entry => {
        //console.log(entry);
        if (entry.isIntersecting){
            entry.target.classList.add("show");  
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const scrollInElements = document.querySelectorAll('.scrollIn');
scrollInElements.forEach((el) => observer.observe(el));



// Carousel
let slideIndex = [1,1,1,1,1,1];
let slideId = ["carousel-1", "carousel-2", "carousel-3", "carousel-4", "carousel-5", "carousel-6"];
// index and slider being used
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);

function plusSlides(currentSlideIndex, currentSlider) {
  showSlides(slideIndex[currentSlider] += currentSlideIndex, currentSlider);
}

// Thumbnail image controls
function currentSlide(currentSlideIndex, currentSlider) {
  showSlides(slideIndex[currentSlider] = currentSlideIndex, currentSlider);
}


function showSlides(currentSlideIndex, currentSlider) {
  let i;
  let x = document.getElementsByClassName(slideId[currentSlider]);
  if (currentSlideIndex > x.length) {slideIndex[currentSlider] = 1}    
  if (currentSlideIndex < 1) {slideIndex[currentSlider] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[currentSlider]-1].style.display = "block";  
}


//Jump to front of the page
const toTop = ()=> window.scrollTo({top: 0, behavior: 'smooth'});
