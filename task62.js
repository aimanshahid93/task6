class Circle{
  constructor(radius=1.0,color="red"){
      this.radius = radius;
      this.color = color;
  }
  toString(radius=this.radius){
      this.radius = radius;
      return `after converting to string ${(this.radius).toString()+(this.color).toString()}`
  }

  circle(){
      return `color is ${this.color} and radius is ${this.radius}`;
  }
  circle(radius){
      this.radius=radius;
      return `radius is ${this.radius}`;
  }
  circle(radius,color){
      this.radius=radius;
      this.color=color;
      return `the radius is ${this.radius} and color is ${this.color}`;
  }
  setRadius(radius=1.0){
      this.radius=radius;
  }
  getRadius(){
      return `the radius by get and set is ${this.radius}`;
  }
  setColor(color="red"){
      this.color=color;
  }
  getColor(){
      return `the color by get and set is ${this.color}`;
  }

  getArea(){
      return `the area is ${(this.radius)*(this.radius)*4}`;
  }
  getCircumference(){
      return `the circumference is ${(this.radius)*2*(Math.PI)}`;
  }
}
let shape = new Circle(6,"black");

console.log(shape);

console.log(shape.circle()); //undefined since the medthod1 is overrided by method2 and by method3
console.log(shape.circle(5)); //radius is 5 and color is undefined because method2 is overrided by method 3
console.log(shape.circle(4,"white")); //radius is 5 and color is white executes with no issues.


shape.setRadius();
console.log(shape.getRadius()); //set radius to default to 1.0 and accessed by getRadius() method.
shape.setColor();
console.log(shape.getColor()); //set color to default red and accessed by getColor() method.

console.log(shape.toString(6));

console.log(shape.getArea()); 
console.log(shape.getCircumference());
/*
Circle
task62.js:47 the radius is undefined and color is undefined
task62.js:48 the radius is 5 and color is undefined
task62.js:49 the radius is 4 and color is white
task62.js:53 the radius by get and set is 1
task62.js:55 the color by get and set is red
task62.js:57 after converting to string 6red
task62.js:59 the area is 144
task62.js:60 the circumference is 37.69911184307752*/