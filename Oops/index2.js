console.log("Namaskaram Sonu");
//Setting Values Using Dot Notation

//creating an object named employee

var employee = {
    //defining properties of the object
    //setting data values
    name : 'Joe',
    age : 20
  }

  console.log("original age was:",employee.age);
  //updating the value of "age"

  employee.agr=24;
  console.log("new age is:", employee.age);

/*  Output
Originally age was: 20
New age is: 24*/

////////Setting Values Accessed Through Square Brackets////
//creating an object named employee

var employee = {
    //defining properties of the object
    //setting data values
    name : 'Joe',
    age : 20
  }
  console.log("Originally age was:",employee['age'])
//updating the value of "age"
employee['age'] = 24
console.log("New age is:",employee['age'])
//creating a new property called designation and setting its value
employee['designation'] = 'Developer'
console.log("Designation is:",employee['designation'])


/////////////Deleting Properties/////////
//creating an object named employee

var employee = {
    //defining properties of the object
    //setting data values
    name : 'Joe',
    age : 20
  }
  //deleting "age" property
delete employee.age
console.log("Age is:",employee.age) //since "age" is deleted "undefined" will be displayed
//deleting "name"
delete employee['name'] //square brackets can also be used 
console.log("Name is:",employee.name) //since "name" is deleted "undefined" will be displayed


///////delete the function properties of an object.///////
//creating an object named employee

var employee = {
    //defining properties of the object
     show() {
       console.log("Name is Joe")
     }
  }
  //calling the function
  employee.show()
  //deleting the function using delete operator
  delete employee.show