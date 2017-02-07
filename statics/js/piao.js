function start(obj,x,y){
var xPos = x;
var yPos = y; 
var step = 1;
var delay = 30; 
var height = 0;
var Hoffset = 0;
var Woffset = 0;
var yon = 0;
var xon = 0;
//var pause = false;

var img1=document.getElementById(obj);
img1.visibility = "visible";
//img1.style.top = yPos;
var interval = setInterval(changePos, delay);
img1.onmouseover=function(){clearInterval(interval);}
img1.onmouseout=function(){interval=setInterval(changePos,delay);}

function changePos() 
{
   width = document.body.clientWidth;
   height = document.body.clientHeight;
   Hoffset = img1.offsetHeight;
   Woffset = img1.offsetWidth;
   img1.style.left = xPos + document.body.scrollLeft + "px";
   img1.style.top = yPos + document.body.scrollTop + "px";
   if (yon){yPos = yPos + step;}
   else {yPos = yPos - step;}
   if (yPos < 0){yon = 1;yPos = 0;}
   if (yPos >= (height - Hoffset)){yon = 0;yPos = (height - Hoffset);}
   if (xon){xPos = xPos + step;}
   else {xPos = xPos - step;}
   if (xPos < 0){xon = 1;xPos = 0;}
   if (xPos >= (width - Woffset)){xon = 0;xPos = (width - Woffset);}
}
}