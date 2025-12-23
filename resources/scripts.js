function recolor(event){ //get mouse pos, make color
  let x = event.clientX;
  let galb = event.clientY;
  let y = galb-485;
  let r = x;
  let g = 255-x;
  let b = y;
  rgebe="rgb("+r+","+g+","+b+")";
  document.getElementById("dabox").style.background = rgebe;
  let coor = "Coordinates2: (" + x + "," + y + ")";
  document.getElementById("coords").innerHTML=rgebe;
}
