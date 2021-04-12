
CW=250;
CH=CW;
const au=1.61
const w=CW/10
var img,mfont,mfont2;


function preload() {
    mfont = loadFont('assets/ethno.ttf');
    mfont2=mfont;
   // mfont = loadFont('assets/Orbitron-Black.ttf');
   // mfont2=loadFont('assets/Orbitron-Medium.ttf');
  }

function setup(){
    createCanvas(CW*4,CH).parent("canvas");
    var ix=CW*4
    img = createImage(ix, ix);
    img.loadPixels();
    var r0=ix/2;
    
    for (var r=0;r<ix;r++) {
        for (var c=0;c<ix;c++) {
            var d=sqrt((r-r0)*(r-r0)+(c-r0)*(c-r0));
            var a=d<=r0*.9?0:255;
            img.set(c,r,[255,255,255,a])

        }
    }
    img.updatePixels();
}

function doshape(d){ 
    push() 
    translate(0,-d);
    var k=w*au*au;
    beginShape()
    vertex(-k,-k);
    vertex(0,0);
    vertex(k,-k);
    endShape()
    pop();
}   





function draw(){
    background(255);
    noFill()
    const d=w*au;
    stroke(0);
    strokeJoin(ROUND)
    strokeWeight(w)
    push();
        translate(CW/2,CH/2);
        doshape(d);
        rotate(PI/2);
        doshape(d);
        rotate(PI/2);
        doshape(d);
        rotate(PI/2);
        doshape(d);
    pop();
    
    image(img,0,0,CW,CW);
    
    noFill()
    stroke(128);
    strokeWeight(w/2);
    circle(CW/2,CW/2,CW*.9);

    
    noStroke()
    
    fill(255);



    rect(CW,0,CW*3,CH);
    fill(0)
    textFont(mfont);
    textSize(110);
    push()
    translate(CW+w/2,CH/2+w*3)
    text("CROSWIL",0,0);
    fill(180)
    textFont(mfont2);
    textSize(30);
    text("find connections",w*.3,w*1.5);
    pop();

}