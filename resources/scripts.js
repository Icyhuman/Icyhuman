function recolor(event){ //get mouse pos, make color
  let x = event.clientX;
  let y = event.clientY;
  var r = x/3;
  var g = 255-x/3;
  var b = y/3;
  document.getElementById("dabox").style.background = rgb(r,g,b);
  let coor = "Coordinates: (" + x + "," + y + ")";
  document.getElementById("coords").innerHTML=coor;
}
