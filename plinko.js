class Plinko {
    constructor(x, y) {
      var options = {
         
          restitution:0.8,
          friction:0.5,
          density:1.0,
          isStatic:true
      }
      this.body = Bodies.circle(x, y, 10, options);
      this.r=10;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push()
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("lightblue");
      ellipse(0, 0,10,10);
      pop()
    }
  };
  