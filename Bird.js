class birds{
    constructor(x,y){
        var O={
            restitution: 1.0,
            friction:0.6,
            density: 0.9
        }
    this.body= Bodies.rectangle(x,y,50,50,O);
    this.width= 50;
    this.height= 50;
    
    World.add(world,this.body)
    
    
    
    
    }
    display(){
        var pos= this.body.position;
        pos.x= mouseX
        pos.y= mouseY
        var ang= this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.width, this.height)
        pop();
    }
    }