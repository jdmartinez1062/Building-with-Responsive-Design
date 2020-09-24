
var divimg = document.getElementById('logo');
var list=document.getElementById('drop-menu');


divimg.onmouseover = function() {mouseOver()};
divimg.onmouseout = function() {mouseOut()};

function mouseOver() {
  list.className = "nav-menu show";
}

function mouseOut() {
  list.className = "nav-menu hide";
}