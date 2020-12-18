class bulle{
    constructor(x,y,width,height,paint){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
this.paint = paint;
    
    }
    see(){


    image(this.paint,this.x,this.y,this.width,this.height);
    
    }
    }