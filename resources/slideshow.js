let index = 0;
switchslide(index)

function arrowCTRLS(n) {
  console.log("ushabti");
  switchslide(index += n);
  console.log("ushabti2");
}

function switchslide(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 0) {index = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[index].style.display = "block";
} 
