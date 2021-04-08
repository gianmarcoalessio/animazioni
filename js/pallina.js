const COEFF = 1
//matter.js libreria da andare a vedere per lo studio delle animazioni
//three.js, babylon.js per animazioni 3D si basano su webgl che a sua volta si basa su opengl, noi con p5.js ci siamo basati su CANVAS
class Pallina {
    constructor() {
        //vogliamo sapere dove si trova la pallina e la sua velocità
        this.x = 0;
        this.y = random(o.CH);//ad una qualsiasi altezza lasciamo la pallina
        this.vx = random(2, 8); //valore compreso tra 5 e 15 anche con la virgola
        this.vy = random(-3, 0);
        this.ay = 0.1;
        this.color = color(random(255), random(255), random(255))//colori casuali per pallina

        var tm = random();
        if (tm < .3) {
            this.dim=30
            this.sprite = new Sprite(simg, [6, 7, 8, 9, 10, 11, 12, 13, 14], random(200, 800))//passiamo la sequenza prendendo le immagini dello sprite dalla 6-14, in 2 secondi
        } else if (tm < .6) {
            this.dim=100
            this.sprite = new Sprite(loserimg, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 1000)
        } else {
            this.dim=40
            this.sprite = null
        }
        if (this.sprite)this.sprite.start(true);
    }
    update() {
        this.x += this.vx
        if (this.x >= o.CW || this.x < 0) {
            this.vx = -this.vx
        }

        this.y += this.vy
        this.vy += this.ay
        if (this.y >= o.CH || this.y < 0) {
            this.vy = -this.vy * COEFF
        }
    }
    draw() {
        if (!this.sprite) {
            fill(this.color)
            circle(this.x, this.y, this.dim)
        } else {
            this.sprite.draw(this.x, this.y, this.dim, this.dim)
        }
    }
}