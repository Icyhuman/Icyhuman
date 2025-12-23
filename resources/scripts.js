function recolor(event){ //get mouse pos, make color
  let x = event.clientX;
  let y = event.clientY - 485;
  //let y = galb - 485;
  let r = x;
  //let g = 255 - x;
  //let b = y;
  //let rgebe="rgb("+r+","+g+","+b+")";
  //document.getElementById("dabox").style.color = rgebe;
  let coor = "Coordinates: (" + r + "," + y + ")";
  document.getElementById("coords").innerHTML=coor;
}
