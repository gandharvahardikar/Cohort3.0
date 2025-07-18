//Assignment #2 - Create a base shape class
//https://projects.100xdevs.com/tracks/promises-async-await/Promises-and-async--await-3
class Shape
{
    constructor(color)
    {
        this.color = color;
    }

    paint()
    {
        console.log('Painting with color${this.color}');
    }

    area()
    {
      throw new Error('The area method must be implemented in the subclass!')
    }

    getDescription()
    {
        return 'A shape with color${this.color}';
    }
}


//rectangle class
class Rectangle extends Shape
{
    constructor(width, height, color)
    {
        super(color);
        this.width = width;
        this.height = height;
    }

    area()
    {
        return this.width * this.height;
    }

    getDescription()
    {
        return 'A rectangle with width ${this.width}, height ${this.height}, and color ${this.color}';
    }
}

//circle class

class Circle extends Shape
{
    constructor(radius, color)
    {
        super(color); //calls the parent class constructor to set the color
        this.radius = radius;
    }

    area()
    { 
        return Math.PI * this.radius * this.radius;
    }


    getDescription() 
    {
        return 'A circle with radius ${this.radius} and color ${this.color}';
    }
}


const circle = new Circle(20);
console.log(circle.area());

//date

const now = new Date(); // current date and time!
console.log(now.toISOString()); //outputs the date in ISO Format!


//maps

const map = new Map();
map.set('name','Gandharva');
map.set('age',30);
console.log(map.get('name'));
console.log(map.get('age'));