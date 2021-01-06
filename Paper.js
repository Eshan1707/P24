class Paper{
    constructor(){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction: 0.5,
            density :1.2
        }
        this.body = Bodies.circle(30,200,20,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,25,25);
    }
}