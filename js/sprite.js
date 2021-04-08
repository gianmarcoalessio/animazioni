class Sprite {
    constructor(simg,frames,time){
        this.simg=simg;
        this.frames=frames;
        this.time=time;
        this.reset();//cosí il constructor chiama sempre la funzione reset
    }
    start(){

    }
    draw(x,y,w,h){
        //draw della frame
        if(this.index>=0 && this.index<this.frames.length){
            this.simg.draw(this.frames[this.index],x,y,w,h)//questo draw è il draw della classe spriteimg con l'index come primo elemento
        }
        this.update()
    }
    //cambia il contatore quando lo ha appena disegnato
    update(){
        if(this.index<(this.frames.length-1)) this.index++;
    }
    reset(){
        this.index=0 //qual è la frame attiva, quindi parto dalla zero

    }
    
}