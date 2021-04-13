"use strict"
const CW = 250;
const CH = CW;
const au = 1.61
const w = CW / 10
var img, mfont, mfont2;


function preload() {
    mfont = loadFont('assets/ethno.ttf');
    mfont2 = mfont;
    //mfont = loadFont('assets/Orbitron-Black.ttf');
    //mfont2=loadFont('assets/Orbitron-Medium.ttf');
}

function doshape(d) {
    push()
    translate(0, -d);
    var k = w * au * au;
    beginShape()
    vertex(-k, -k);
    vertex(0, 0);
    vertex(k, -k);
    endShape()
    pop();
}



function setup() {
    var xcanvas=createCanvas(CW *4, CH).parent("canvas");
    var inv=false;
    var kkk=color(128); 
   
    var ix = CW 
    img = createImage(ix, ix);
    img.loadPixels();
    var r0 = ix / 2;

    for (var r = 0; r < ix; r++) {
        for (var c = 0; c < ix; c++) {
            var d = sqrt((r - r0) * (r - r0) + (c - r0) * (c - r0));
            var a = d <= r0 * .95 ? 0 : 255;
            img.set(c, r, inv?[0,0,0,a]:[255, 255, 255, a])

        }
    }
    var d = w * au;
   
    img.updatePixels();
    background(inv?0:255);
    noFill()

    push();
    translate(CW / 2, CH / 2);

    strokeWeight(w/2.5);
    stroke(kkk);
    //line (0,-w*au,0,w*au);
    //line (-w*au,0,w*au,0);
    circle(0, 0, w*au);

    
    
    
    stroke(128);
    strokeJoin(ROUND)
    strokeWeight(w)

    doshape(d);
    rotate(PI / 2);
    doshape(d);
    rotate(PI / 2);
    doshape(d);
    rotate(PI / 2);
    doshape(d);
    pop();

    image(img, 0, 0, CW, CW);

    noFill()
    stroke(128);
    strokeWeight(w / 2.5);
    circle(CW / 2, CW / 2, CW * .95);

    noStroke();
   
    fill(inv?0:255);
    rect(CW, 0, CW * 3, CH);
    fill(inv?255:0)
    textFont(mfont);
    textSize(90);
    push()
    translate(CW + w / 2, CH / 2 )
    text("CROSWIL", 0, 0);
    fill(180)
    textFont(mfont2);
    textSize(20);
    text("find connections", w * .3, w * 1.5);
    pop();
    //saveCanvas(xcanvas,"logo4","png")
    noLoop()
}