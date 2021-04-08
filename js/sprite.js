class Sprite {
    constructor(simg, frames, time) {
        this.simg = simg;
        this.frames = frames;
        this.time = time / this.frames.length;//vogliamo sapere quando tempo è passato per passare da un frame al successivo, per togliere l'istruzione del framerate, in modo tale che la sprite si aggiorn con un tempo suo
        this.reset();//cosí il constructor chiama sempre la funzione reset
    }
    start(continua = false) {
        this.reset();
        this.continua = continua;
        this.iStart = true;
        this.date = new Date();//classe interna 
    }
    draw(x, y, w, h) {
        //draw della frame
        if (this.index >= 0 && this.index < this.frames.length) {
            this.simg.draw(this.frames[this.index], x, y, w, h)//questo draw è il draw della classe spriteimg con l'index come primo elemento
        }
        this.update()
    }
    //cambia il contatore quando lo ha appena disegnato
    update() {
        if (this.iStart) {
            var d = new Date()
            var timeMillis = d - this.date //mi da quanto tempo è passato da quando ho chiamto date 
            if (this.continua) {
                this.index = (Math.floor(timeMillis / this.time)) % this.frames.length
            } else {
                this.index = Math.floor(timeMillis / this.time)//a che frame si trova in quel momento l'animazione 
                if (this.index >= this.frames.length - 1) {
                    this.index = this.frames.length - 1; //cioè si ferma nell'ultimo frame e non continua in modo continuo perchè il tempo continua sempre, datoc he viene chiamato in un ciclo infinito il draw
                    this.iStart = false;

                }
            }
        }
    }
    reset() {
        this.index = 0 //qual è la frame attiva, quindi parto dalla zero
        this.iStart = false
    }

}