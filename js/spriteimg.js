class Spriteimg {
    constructor(file,r,c) {
        this.r=r;
        this.c=c;
        this.sprite = loadImage(file, (img) => {
            this.w = img.width / c;
            this.h = img.height / r;
        })
    }

    draw(i,x,y,w,h){
        var r = Math.floor(i / this.c);
        var c = i % this.c

        image(this.sprite, x, y, w, h,
            this.w*c,this.h*r, this.w, this.h);
    }


}