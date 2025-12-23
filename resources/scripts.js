function recolor(event){ //get mouse pos, make color
  let x = event.clientX;
  let galb = event.clientY;
  let y = galb-485;
  let r = x;
  let g = 255-x;
  let b = y;
  document.getElementById("dabox").style.background = rgb(r,g,b);
  let coor = "Coordinates2: (" + x + "," + y + ")";
  document.getElementById("coords").innerHTML=coor;
}
