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

var index2 = 0;
console.log("ushab2");
switchslide2(index2);

function arrowCTRLS2(n) {
  console.log("ushabti");
  switchslide2(index2 += n);
  console.log("ushabti2");
}

function switchslide2(n) {
  let i;
  console.log("ushabti");
  let slides = document.getElementsByClassName("slide2");
  console.log(n);
  console.log(slides.length);
  if (n >= slides.length) {index2 = 0}
  if (n < 0) {index2 = slides.length-1}
  console.log(index2);
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  console.log(slides[index2].style.display);
  slides[index2].style.display = "block";
  console.log(slides[index2].style.display);
  console.log("endshabti");
} 
