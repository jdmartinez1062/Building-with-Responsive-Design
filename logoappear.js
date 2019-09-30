
var myID = document.getElementById('logo');


var myScrollFunc = function()
{
    var y = window.scrollY;
    if (y >= 32) 
        {
            myID.className = 'nav-logo show'
        } 
    else 
        {
            myID.className = 'nav-logo hide'
        }
};

window.addEventListener("scroll", myScrollFunc);