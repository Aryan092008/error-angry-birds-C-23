class Ground{
    contructor(x,y,width,height)
{
    var GO={
        isStatic:true
    }
    this.body= Bodies.rectangle(x,y,width,height,O);
    this.width= width;
    this.height= height;
    World.add(world,this.body);
}
display(){
    var pos= this.body.position;
    rectMode(CENTER);
    fill("green");
    rect(pos.x,pos.y,this.width,this.height);
}
}
