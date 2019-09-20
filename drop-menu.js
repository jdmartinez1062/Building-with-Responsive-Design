
var divimg = document.getElementById('logo');
var list=document.getElementById('drop-menu');


document.getElementById("logo").onmouseover = function() {mouseOver()};
document.getElementById("logo").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("drop-menu").className = "nav-menu show";
}

function mouseOut() {
  document.getElementById("drop-menu").className = "nav-menu hide";
}