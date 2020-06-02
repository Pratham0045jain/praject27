class SlingShot{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.003,
            length: 80
        }
        this.bodyB = bodyB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    
    
    /* fly(){
        this.sling.bodyA = null;
    } */

    display(){
        
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.bodyB.position;

        stroke("white");
        strokeWeight(11);
        line(pointA.x,pointA.y,pointB.x,pointB.y);

    }
    
}