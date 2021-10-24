class Slingshot
{
    constructor(b1, b2) //b1 is bird body & b2 is a log5 body
    {
        var options = {'bodyA': b1, 'bodyB': b2, 'length': 10, 'stiffness': 0.04};
        this.sling = Constraint.create(options);
        World.add(myWorld, this.sling);
    }

    display()
    {
        strokeWeight(3); 
        line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.sling.bodyB.position.x, this.sling.bodyB.position.y);
    }
};