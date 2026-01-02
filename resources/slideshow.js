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
  if (n > slides.length) {index = 1}
  if (n < 0) {index = slides.length}
  console.log("funshabti");
  console.log(index);
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  console.log(slides);
  //slides[index].style.display = "block";
  console.log("endshabti");
} 
