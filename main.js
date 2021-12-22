window.onresize = screen;
window.onhold = screen;

function screen() {
    myWidth = window.innerWidth;

    document.getElementById("size").innerHTML = "Width : " + myWidth + "px" ;
}