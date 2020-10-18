class Bobball {
    constructor(x,y,r){
        var ballprop ={
            density : 2
        }
        this.ballbody = Bodies.circle(x,y,r,ballprop);
        World.add(world,this.ballbody);
        this.r = r;
    }

    display(){
        var pos = this.ballbody.position;
      
        ellipse(pos.x,pos.y,this.r*2,this.r*2);
    }
}