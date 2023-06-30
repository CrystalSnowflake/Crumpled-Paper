class Ball{
    constructor(x, y, r){
        var options = {
            density: 1.2,
            restitution: 0.2,
            friction: 1,
            angle: PI/2,
            isStatic: false
        }

        this.x = x;
        this.y = y;
        this.r  = r*2;
        this.sphere = Bodies.circle(x, y, r, options);
        World.add(world, this.sphere);
    }

    show(){
        var x = this.sphere.position.x;
        var y = this.sphere.position.y;

        push();
        ellipseMode(CENTER)
        fill("#AC7AA5")
        translate(x, y)
        ellipse(0, 0, this.r, this.r);
        pop();
    }
}