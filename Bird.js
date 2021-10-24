class Bird extends BaseClass //Bird class is a child class
{
    constructor(x, y)
    {
        super(x, y, 50, 50); //super() will call the BaseClass constructor function
        this.image = loadImage("sprites/bird.png");
    }

    display()
    {
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        
        super.display(); //It will now call display() function of the BaseClass
    }
};
