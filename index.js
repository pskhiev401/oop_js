// Example of Object Literal
// const circle = {
//   //properties
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1
//   },
//   draw: function() {
//     // this is a method
//     console.log('draw');
//   }
// };

// Factory Function
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log('draw');
    }
  };
}

const circle = createCircle(1);
// circle.draw();

// Constructor Function
function Circle(radius){
  console.log('this', this)
  // this points to the Circle {}
  this.radius = radius;
  this.draw = function (){
    console.log('draw')
  }
  // return this; // return is implicit therefore we can omit the return statement
}
const another = new Circle(1);
// The 'new' operator creates a new object, called Circle, and 'this' points to that newly created object
// We can create objects two ways: 1) Factories or, 2) Constructors
// Every object has a constructor property, and it references the function used to the create that object

// In JS functions are objects!

// Primiatives & Refernce Types
// Primatives/Value Types: Number, Strings, Bools, Symbols, Undefined, Null
// Reference Types: Objects, Functions, Arrays

// Primatives Example
let x = 10;
let y = x;

x = 20;

// console.log(x) // expected 20
// console.log(y) // expected 10

// Object Example
let a = {value: 10}
let b = a;

a.value = 20

//console.log(a) // {value: 20}
//console.log(b) // {value: 20}
// Primitive Example
let number = 10;
function increase(number){
  number++;
}
increase(number);
console.log(number) // expected 10

// Object Example (Reminder: functions are objects!)
let obj = {value: 10};
function increment(obj){
  obj.value++;
}
increment(obj);
console.log(obj)
// Takeaway: Primitives are copied by their value, whereas Objects are copied by their reference(in memory)!