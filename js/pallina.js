class Pallina{
    constructor(){
        //vogliamo sapere dove si trova la pallina e la sua velocità
        this.x=0;
        this.y=random(o.CH);//ad una qualsiasi altezza lasciamo la pallina
        this.vx=random(5,15); //valore compreso tra 5 e 15 anche con la virgola
        this.color=color(random(255),random(255),random(255))//colori casuali per pallina
    }
    update(){
        this.x+=this.vx
    }
    draw(){
        fill(this.color)
        circle(this.x,this.y,20)
    }
}