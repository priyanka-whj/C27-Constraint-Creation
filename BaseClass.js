class BaseClass //Parent Class
{
    constructor(x, y, width, height, angle)
    {
        var option = {'restitution': 0.8, 'friction': 1};

        this.bodyX = x; 
        this.bodyY = y;
        this.bodyW = width;
        this.bodyH = height;
        this.bodyA = angle;

        this.body = Bodies.rectangle(this.bodyX, this.bodyY, this.bodyW, this.bodyH, option);
        World.add(myWorld, this.body);
        this.image = loadImage("sprites/base.png");
    }

    display()
    {      
        push(); //It will store the previous settings of the canvas into an array

        translate(this.body.position.x, this.body.position.y); //shift the origin of the canvas
        rotate(this.body.angle); //rotate the canvas by an angle
        
        imageMode(CENTER);
        image(this.image, 0, 0, this.bodyW, this.bodyH);

        pop(); //It will take out the previous settings of the canvas from an array
    }
};
