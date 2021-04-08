var simg;// sprite image
var spriteBW;//sprite da black a white
var spriteWB;//sprite da white a black

var loser
var palline=[];//vettore dei frame della pallina che simula che si sposta 

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
    //spriteBW.draw(10, 10, 100, 100);
    //spriteWB.draw(10, 150, 100, 100);
    //loser.draw(150,10,1000,1000)

    for (var p of palline){
        p.draw()
        p.update()
    }
    /*palline=palline.filter(p=>{
        return p.x<o.CW
    })*///fa un filtro eliminando tutte le palline che superano i valori di x per pallina maggiori di CW
}
function preload() {
    simg = new Spriteimg("./img/pedine.png", 4, 8)
    spriteBW = new Sprite(simg, [6, 7, 8, 9, 10, 11, 12, 13, 14], 313)//passiamo la sequenza prendendo le immagini dello sprite dalla 6-14, in 2 secondi
    spriteWB = new Sprite(simg, [14, 13, 12, 11, 10, 9, 8, 7, 6], 517)//passiamo la sequenza prendendo le immagini dello sprite dalla 14-6, in 4 secondi
    
    var loserimg= new Spriteimg("./img/loser.png",1,20)
    loser =new Sprite(loserimg,[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],1000)
}
function keyPressed() {
    switch (key) {
        case "r":
            spriteBW.reset();
            spriteWB.reset();
            loser.reset();
            break;
        case "s":
            spriteBW.start(false);
            spriteWB.start(false);
            break;
        case "c":
            spriteBW.start(true);
            spriteWB.start(true);
            loser.start(true)
            break;
        case "p":
            palline.push(new Pallina)//ogni volta che premiamo "p" aggiunge una nuova pallina
            break;

    }
}

