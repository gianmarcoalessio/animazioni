const COEFF=1
//matter.js libreria da andare a vedere per lo studio delle animazioni
//three.js, babylon.js per animazioni 3D si basano su webgl che a sua volta si basa su opengl, noi con p5.js ci siamo basati su CANVAS
class Pallina{
    constructor(){
        //vogliamo sapere dove si trova la pallina e la sua velocità
        this.x=0;
        this.y=random(o.CH);//ad una qualsiasi altezza lasciamo la pallina
        this.vx=random(2,8); //valore compreso tra 5 e 15 anche con la virgola
        this.vy=random(-3,0);
        this.ay=0.1;
        this.color=color(random(255),random(255),random(255))//colori casuali per pallina
        
        this.spriteBW = new Sprite(simg, [6, 7, 8, 9, 10, 11, 12, 13, 14], 313)//passiamo la sequenza prendendo le immagini dello sprite dalla 6-14, in 2 secondi
        this.spriteBW.start(true)
    }
    update(){
        this.x+=this.vx
        if (this.x>=o.CW || this.x<0){
            this.vx=-this.vx
        }

        this.y+=this.vy
        this.vy+=this.ay
        if (this.y>=o.CH || this.y<0){
            this.vy=-this.vy*COEFF
        }
    }
    draw(){
        //fill(this.color)
        //circle(this.x,this.y,40)
        this.spriteBW.draw(this.x,this.y,40,40)
    }
}