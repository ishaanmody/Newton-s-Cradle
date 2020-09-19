class Rope{
constructor(bodyA,pointB){
var options={
bodyA:bodyA,
pointB:pointB,
stiffness:0.3,
length:400
}
this.body=Constraint.create(options);
World.add(world,this.body);
}
display(){

line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.body.pointB.x,this.body.pointB.y);
}
}