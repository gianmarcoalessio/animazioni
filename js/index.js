var simg;// sprite image
var spriteBW;//sprite da black a white
var spriteWB;//sprite da white a black

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
    frameRate(10) 
}
function draw() {
    background("whitesmoke");
    //simg.draw(0,10,10,200,200);
    spriteBW.draw(10,10,100,100);
    spriteWB.draw(10,150,100,100);
}
function preload(){
    simg=new Spriteimg("./img/pedine.png",4,8)
    spriteBW= new Sprite(simg,[6,7,8,9,10,11,12,13,14],2000)//passiamo la sequenza prendendo le immagini dello sprite dalla 6-14, in 2 secondi
    spriteWB= new Sprite(simg,[14,13,12,11,10,9,8,7,6],4000)//passiamo la sequenza prendendo le immagini dello sprite dalla 14-6, in 4 secondi
}

