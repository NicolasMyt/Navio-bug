class ClassNavio{
    constructor(x,y,w,h,NavioPosition){
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;

      this.MoldeNavio = Bodies.rectangle(this.x,this.y,this.w,this.h,NavioPosition)
      this.NavioImage = loadImage("assets/boat.png")
      this.NavioPosition = NavioPosition;
      World.add(world,this.MoldeNavio)
    }

    display(){
        var angle = this.MoldeNavio.angle

     push()
     translate(this.MoldeNavio.position.x, this.MoldeNavio.position.y);
     rotate(angle);
     imageMode(CENTER);
     image(this.NavioImage, 0, this.NavioPosition, this.w, this.h);
     pop();
    }
}