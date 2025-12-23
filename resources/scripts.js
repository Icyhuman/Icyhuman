function recolor(){ //get mouse pos, make color
  let x = event.clientX;
  let y = event.clientY;
  var r = x/3;
  var g = 255-x/3;
  var b = y/3;
  document.getElementById("dabox").style.background = rgb(r,g,b)"Uh oh silly you put in something other than numbers with commas and the code didn't like that";
}
