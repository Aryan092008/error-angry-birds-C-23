class log{
    constructor(x,y,height,angle){
        var O={
            restitution: 1.0,
            friction:0.6,
            density: 0.9
        }
    this.body= Bodies.rectangle(x,y,50,50,O);
    this.width= 50;
    this.height= height;
    Matter.Body.setAngle(this.body,angle)
    World.add(world,this.body)
    
    
    
    
    }
    display(){
        var pos= this.body.position;
        var ang= this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle);
        rectMode(CENTER);
        fill("brown");
        rect(0,0,this.width, this.height)
        pop();
    }
    }