///////////////////////////////////////////Method 1/////////////////////////////////////////
//Creating an Object Using {...}

//creating an object named employee


 var empolyee = {
      //defining properties of the object
  //setting data values

  name: 'Sonu',
  age:  20,
  designation: 'FullStackDeveloper',
  //function to display name of the employee

  displayName(){
      console.log("Name is Sonu");
  }

}
//displaying the properties of the object
empolyee.displayName()
console.log("Age is:",empolyee.age)
console.log("Designation is:",empolyee.designation)






////////////////////////////////////////////Method 2/////////////////////////////////////////////////
// Let’s look at an example of how we can implement that.
//creating an object named employee

 var employee  ={
     //defining properties of the object
  //setting data values

  name : {
      firstName: 'Sonu',
      lastName:  'Gupta'
  },
 age: 20,
 designation : 'Developer',
  displayName() {
    console.log("Name is Sonu")

}
}
//displaying the properties of the object

console.log("Age is:",employee.age)
console.log("Designation is:",employee.designation)
employee.display()



///////////////////////////////////////Creating an Object Using Object()///////////////////////////////////////
//an empty employee object created
 var employee = new Object()
//adding properties to the object
employee.name =  'Joe'
employee.age = 28
employee.designation = 'Developer'
//adding a function called display to the object
//using the function keyword
employee.display = function() { 
  console.log("Name is Joe")
}

//displaying the properties of the object
//the method to access properties will be discussed in detail the next lesson 
console.log("Age is:",employee.age)
console.log("Designation is:",employee.designation)
employee.display()


////////////////////////////////////////////////Creating an Object Using create//////////////////////////////////////////
//creating an object named employee1

var assistantManager = {
    //defining properties of the object
    //setting data values
    name : 'Joe',
    age : 28,
    designation : 'Developer',
    //function to display name of the employee
    displayName() {
      console.log("Name is Joe")
    }
  }
  //Example: we have an "assistantManager" who gets promoted to "manager" position
//so we create a "manager" object based on "assistantManager"
//it will have same properties as "assistantManager"
//however these properties can be changed or added to
var manager = Object.create(assistantManager)

//displaying the properties of the object assistantManager
//the method to access properties will be discussed in detail the next lesson 
assistantManager.displayName()
console.log("Age is:",assistantManager.age)
console.log("Designation is:",assistantManager.designation)
//displaying the properties of the object employee2
//this will show the same values as that of object employee1
manager.displayName()
console.log("Age is:",manager.age)
console.log("Designation is:",manager.designation)


/////////////////////////////////const method//////////////////////////////////////////////

//creating an object named employee using const

const employee = {
    name : 'Joe', 
    age : 28, 
    designation : 'Developer'
}

//value of name, age or designaton can be changed
employee.name = 'Amy'
console.log("New name is:",employee.name)

//object cannot be assigned new object
//You will get an error when you uncomment and run the line below
//employee = {sex : 'male', status : 'single'}
