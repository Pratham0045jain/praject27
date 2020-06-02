class Box {
    constructor(x,y,radius) {
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      

      World.add(world, this.body);
    }
    display(){

        if(keyCode === 32){
            this.body.position.x = mouseX;
            this.body.position.y = mouseY;
        }
        
        if(keyCode === 13){
            this.body.position.x = 200;
            this.body.position.y = 350;
        }
      
      
      
      
      
      var pos =this.body.position;
      //cirMode(CENTER);
      fill("blue");
      circle(pos.x, pos.y, this.radius);
    }
  }
  