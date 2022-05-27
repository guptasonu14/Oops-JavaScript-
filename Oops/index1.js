console.log("Hii Sonu");
//Dot Operator
//Example

//creating an object named shape
var Shape ={
     //defining properties of the object
  //setting data values
  name: 'Square',
  sides :4
}
//accessing the properties using the dot operator
console.log(Shape.name);
console.log(Shape.sides);


/////////Accessing Properties of a Nested Object//////
//creating an object named employee

var employee = {
    //defining properties of the object
  //setting data values
  
  //value of "name" is another object

  name:{
      firstname: Sonu ,
      lastname: Gupta
  },
  age : 28,
  designation : 'Developer'
  }
  //accessing the first name 
console.log("First name is:", employee.name.firstName)

//accessing the last name 
console.log("Last name is:", employee.name.lastName)
//accessing the age
console.log("Age is:", employee.age)

//accessing the designation
console.log("Designation is:",employee.designation)


////////////Square bracket [] to access value////////
//creating an object named shape

var shape = {
    //defining properties of the object
    //setting data values
    name : 'square',
    sides : 4
  }
  //accessing the properties using square brackets
console.log("Name is:", shape['name']) //using square brackets to access "name"
console.log("Number of sides are:", shape['sides']) //using square brackets to access "sides"

//creating an object named employee
var employee = {
    //defining properties of the object
    //setting data values
    
    //value of "name" is another object
    name : {
      firstName: 'Joe', 
      lastName : 'Adams'
    }
  }
  
  //accessing the first name 
  console.log("First name is:", employee['name']['firstName']) 
  
  //accessing the last name 
  console.log("Last name is:", employee['name']['lastName'])


  ////////////////Iterating over Object Properties///////////
  //creating an object named employee
var employee = {
    firstName: 'Joe', 
    lastName : 'Adams',
    age: 23,
    sex: 'male',
    designation: 'chef'
  }
  //using for..in loop to iterate over the properties
  for(x in empolyee){
      console.log(x)
  }

  Output:

  firstName
  lastName
  age
  sex
  designation


  //////////////////Calling Functions///////
  //creating an object named shape

var shape = {
    //defining properties of the object
    //function to display a message
    displaySides() {
      console.log("Square has 4 sides")
    },
    displayName() {
    console.log("Shape is Square")
    }
  }
  //calling function using dot operator
shape.displayName()
//calling function using square brackets
shape['displayName']()
//calling function using dot operator
shape.displaySides()
//calling function using square brackets
shape['displaySides']()