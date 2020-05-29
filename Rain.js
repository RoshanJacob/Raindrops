class Rain {
    constructor(x,y){
        this.rain = Bodies.circle(x,y,5,5);
        this.width = width;
        this.height = height;
        World.add(world,this.rain);
    }
    display(){
        fill("yellow");
        ellipse(this.rain.position.x,this.rain.position.y,5,5);
    }
    fall(){ 
        this.yPosition=this.yPosition+random(10,30)
         if(this.yPosition>=height){ 
              this.yPosition=random(0,100); 
        }
    }
}