console.log("hello");
//Constructor Functions
function Employee(_name, _age, _designation){
    this.name = _name
    this.age = _age
    this.designation = _designation
  }
//////////////////Creating an Object Instance/////////////////
function Employee(_name, _age, _designation){
    this.name = _name
    this.age = _age
    this.designation = _designation
  }
  
  //creating an object called employeeObj1
  var employeeObj1 = new Employee('Joe', 22, 'Developer')
  
  //displaying properties of employeeObj1
  console.log("Name of employee:",employeeObj1.name)
  console.log("Age of employee:",employeeObj1.age)
  console.log("Designation of employee:",employeeObj1.designation)
  
  //creating another object called employeeObj2
  var employeeObj2 = new Employee('Amy', 28, 'Engineer')
  
  //displaying properties of employeeObj2
  console.log("Name of employee:",employeeObj2.name)
  console.log("Age of employee:",employeeObj2.age)
  console.log("Designation of employee:",employeeObj2.designation)

  ////////////Adding New Properties///////////////
  //function constructor called Employee
function Employee(_name, _age, _designation){
    this.name = _name
    this.age = _age
    this.designation = _designation
    //adding a new property named "company" inside constructor function directly
    //it's not passed as a parameter into the constructor function
    this.company = 'Google' //this will act as a default value for all objects created 
  }
  
  //creating an object called employeeObj
  var employeeObj = new Employee('Joe', 22, 'Developer')
  
  //displaying properties of employeeObj
  console.log("Name of employee:",employeeObj.name)
  console.log("Age of employee:",employeeObj.age)
  console.log("Designation of employee:",employeeObj.designation)
  console.log("Employee works in:", employeeObj.company)

  ///////////Methods in Constructor Functions//////////
  //creating an object named Employee
function Employee(_name,_age,_designation) {
    this.name = _name,
    this.age = _age,
    this.designation = _designation,
   //function to display name of the Employee
   this.displayName = function() {
     console.log("Name is:", this.name)
   }
 }
 //creating an object
 var employeeObj = new Employee('Joe',22,'Developer')
 //calling the method for employeeObj
 employeeObj.displayName()

 ////A new method is added to an object in the following way://
 //creating an object named employee
var employee = {
    //defining properties of the object
    //setting data values
    name : 'Joe',
    age : 28,
    designation : 'Developer',
    //function to display name of the employee
    displayName() {
      console.log("Name is:",this.name)
    }
  }
  //calling the method
  employee.displayName()
  //adding a method that returns the age to the object
  employee.getAge = function(){
    return this.age
  }
  //calling the function and displaying the result
  console.log("Age is:",employee.getAge())

  ////If a new method is to be added
  //creating an object named Employee
function Employee(_name,_age,_designation) {
    this.name = _name,
    this.age = _age,
    this.designation = _designation,
   //function to display name of the Employee
   this.displayName = function() {
     console.log("Name is:",this.name)
   }
   //adding a new setAge function
   this.setAge = function(newAge){
     this.age = newAge
   }
 }
 //creating an object
 var employeeObj = new Employee('Joe',22,'Developer')
 //calling the setAge function for employeeObj
 employeeObj.setAge(30)
 //displaying new age
 console.log("New age is",employeeObj.age)










 //Exercise 1: Sum of Squares
 function SquareSum(num1,num2,num3){
     this.num1 = num1
     this.num2 = num2
     this.num3 = num3
     this.squaresum = function(){
         this.num1 = this.num1*this.num1
         this.num2 = this.num2*this.num2
         this.num3 = this.num3*this.num3
         this.answer = this.num1+this.num2+this.num3
    return this.answer
     }
 }

 //Exercise 2: Calculator
 function Calculator(num1,num2) {
  
    this.num1 = num1
    this.num2 = num2
 
   // Addition Method
   this.add = function() {
     return this.num1 + this.num2
   }
 
   // Subtraction Method
   this.subtract = function() {
     return this.num2 - this.num1
   }
   // Multiplication Method
   this.multiply = function() {
     return this.num1 * this.num2;
   }
 
 // Divison Method
   this.divide = function() {
     return this.num2 / this.num1;
   }
 }


 //Exercise 3: Calculate the Student's Total Marks
 
 function Student(marks1,marks2) {

    //Define and initialize both private properties here
    var _marks1 = marks1
    var _marks2 = marks2
  
  
    //Define the getMarks function on Student prototype here
    Student.prototype.getMarks = function(markNumber) {
      
      if(markNumber == 1)
        return _marks1
      else if(markNumber == 2)
        return _marks2
    }
    
    //Define the calcTotal function on Student prototype here
    Student.prototype.calcTotal = function() {
      // Write definition here
      this.totalMarks = _marks1 + _marks2
      return this.totalMarks
    }
  }