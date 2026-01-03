var index = 0;
console.log("ushabti2");
switchslide(index);

function arrowCTRLS(n) {
  console.log("ushabti");
  switchslide(index += n);
  console.log("ushabti2");
}

function switchslide(n) {
  let i;
  console.log("ushabti");
  let slides = document.getElementsByClassName("slide");
  console.log(n);
  console.log(slides.length);
  if (n >= slides.length) {index = 0}
  if (n < 0) {index = slides.length-1}
  console.log(index);
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  console.log(slides[index].style.display);
  slides[index].style.display = "block";
  console.log(slides[index].style.display);
  console.log("endshabti");
} 
