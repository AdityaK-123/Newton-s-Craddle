  
  class Bob {
    constructor(x,y)   {
        var options = {
            isStatic:false,
            restitution: 1.0,
            density: 7.8,
            friction: 20
        }
        this.body = Bodies.circle(x,y,23,options);
        
        World.add(world,this.body);

    }

        display(){
            push();
            var pos = this.body.position;
             fill('orange');
             strokeWeight=7;
             stroke('red');
            ellipseMode(CENTER);
            ellipse(pos.x,pos.y,50,50);
            pop();
        }

};