function recolor(event){ //get mouse pos, make color
  let x = event.clientX;
  let y = event.clientY;
  //let y = galb - 485;
  let r = x;
  let g = 255 - x;
  let b = y;
  //let rgebe="rgb("+r+","+g+","+b+")";
  //document.getElementById("dabox").style.color = rgebe;
  let coor = "Coordinates2: (" + x + "," + y + ")";
  document.getElementById("coords").innerHTML=coor;
}
