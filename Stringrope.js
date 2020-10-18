class Stringrope{
    constructor(body1,point){
        var ropeProp = {
            bodyA: body1,
            pointB: point
        }
        this.ropeString = Constraint.create(ropeProp);
        
        World.add(world,this.ropeString);
    }
    display(){

        push();
        stroke("red");
        strokeWeight(4);
        var b = this.ropeString.bodyA.position;
        var p = this.ropeString.pointB;
        line(b.x,b.y,p.x,p.y);
        pop();
    }

}