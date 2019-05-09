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
  // console.log('this', this)
  // this points to the Circle {}
  this.radius = radius;
  this.draw = function (){
    console.log('draw')
  }
}
const another = new Circle(1);


// We can create objects two ways: 1) Factory Function or, 2) Constructor Function