const COEFF=1

class Pallina{
    constructor(){
        //vogliamo sapere dove si trova la pallina e la sua velocità
        this.x=0;
        this.y=random(o.CH);//ad una qualsiasi altezza lasciamo la pallina
        this.vx=random(2,8); //valore compreso tra 5 e 15 anche con la virgola
        this.vy=random(-3,0);
        this.ay=0.1;
        this.color=color(random(255),random(255),random(255))//colori casuali per pallina
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
        fill(this.color)
        circle(this.x,this.y,20)
    }
}