var simg;

var o = {
    CW: 0,
    CH: 0,
}
function init() {
    o.CW = windowWidth;
    o.CH = windowHeight;
}
function windowResized() {
    init();
    resizeCanvas(o.CW, o.CH)
}
function setup() {
    init();
    createCanvas(o.CW, o.CH).parent("canvas"); 
}
function draw() {
    background("whitesmoke");
    simg.draw(0,10,10,200,200);
}
function preload(){
    simg=new Spriteimg("./img/pedine.png",4,8)
}
