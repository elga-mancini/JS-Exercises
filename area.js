class Square {
    constructor(side) {
      this.side = side;
    }
  }
  
  class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  }
  
  class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  }
  
  class AreaCalculator {
    static calculate(geometry) {
      let area;
      if(geometry instanceof Square){
        area = geometry.side ** 2;
      } else if (geometry instanceof Rectangle) {
        area = geometry.width * geometry.height;
      } else if (geometry instanceof Circle) {
        area = (geometry.radius ** 2) * 3.14;
      } else {
        return "Error!"
        } return area;
    } 
  }
  
  const square = new Square(4);
  const rectangle = new Rectangle(4, 2);
  const circle = new Circle(5);
  
  console.log(AreaCalculator.calculate(square));
  console.log(AreaCalculator.calculate(rectangle));
  console.log(AreaCalculator.calculate(circle));