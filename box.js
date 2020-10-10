class box{
    contructor(x,y,width,height)
{
    var O= {
        restitution: 0.6,
        friction: 0.5,
        density: 0.9
    }
    this.body= Bodies.rectangle(x,y,width,height,O);
    this.width= width;
    this.height= height;
    World.add(world,this.body);
}
display(){
    var pos= this.body.position;
    var angle=this.body.angle;
    push ();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
}
}