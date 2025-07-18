//Assignment #1 - Create a Circle class

class Circle 
{
      constructor(radius, color) //used for defining the components of the circle
     {
        this.radius = radius;
        this.color = color;

     }


     area()
    {
    // formula for area of circle
    const area = this.radius * this.radius * Math.PI;
    return area;
    }

            paint() 
            {
             console.log('Painting with color ${this.color}');
            }

}

//size of the circle and the color
const circle = new Circle(2, "red") 
const area = circle.area();
console.log(area);