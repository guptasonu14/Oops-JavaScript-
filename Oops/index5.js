console.log("classes");
//creating a class named employee
class employee{
    //creating the constructor function
    constructor(name,age,designation){
      //all properties defined as they were in the constructor function
      this.name = name
      this.age = age
      this.designation = designation
      this.displayName = function() {
        console.log("Name is:",this.name)
      }
    }
  }
  //displaying type of "employee"
  console.log(typeof employee)


  //Creating an Object Instance/////

  //creating a class named employee
class employee{
    //creating the constructor function
    constructor(name,age,designation){
      //all properties defined as they were in the constructor function
      this.name = name
      this.age = age
      this.designation = designation
      this.displayName = function() {
        console.log("Name is:",this.name)
      }
    }
  }
  //creating an object instance named "employeeObj"
  var employeeObj = new employee('Joe',22,'Developer')
  //displaying the properties of employeeObj
  employeeObj.displayName()
  console.log("Age is",employeeObj.age)
  console.log("Designation is:",employeeObj.designation)



  ///////////Defining Methods in a Class///////////

  //creating a class named employee
class employee{
    //creating the constructor function
    constructor(name,age,designation){
      //all properties defined as they were in the constructor function
      this.name = name
      this.age = age
      this.designation = designation
      this.displayName = function() {
        console.log("Name is:",this.name)
      }
    }
    //defining methods in a class
    //getAge method returning the age of the current object
    getAge(){
      return this.age
    }
  }
  //creating an object instance named "employeeObj"
  var employeeObj = new employee('Joe',22,'Developer')
  //displaying the properties of employeeObj
  employeeObj.displayName()
  console.log("Age is:",employeeObj.getAge()) //calling the getAge function
  console.log("Designation is:",employeeObj.designation)

  ////////Get/Set Methods////////

  //creating a class named employee
class employee{
    //creating the constructor function
    constructor(name,age,designation){
      //all properties defined as they were in the constructor function
      this.name = name
      this.age = age
      this.designation = designation
    }
    //defining methods in a class
    //getname method returning the name of the current object
    get getname(){
      return this.name
    }
    //setname method setting the name 
    //and displaying the name and the number of alphabets in the name
    set setname(val){
      this.name = val
      console.log("New name is:", this.name)
      console.log(`The name ${this.name} has ${val.length} alphabets`)  
    }
  }
  //creating an object instance named "employeeObj"
  var employeeObj = new employee('Joe',22,'Developer')
  //displaying the properties of employeeObj
  console.log("Name is:",employeeObj.getname)
  console.log("Designation is:",employeeObj.designation)
  console.log("Age is:",employeeObj.age)
  employeeObj.setname = "Ted"


  ////////Hiding Properties///////
  class Student {
    constructor(name,age,sex,grade) {
      //properties hidden 
      var _name = name
      var _age = age
      var _sex = sex
      var _grade = grade
      this.getName = function() {
        return _name
      }
      this.getAge = function() {
        return _age
      }
      this.getSex = function() {
        return _sex
      }
      this.getGrade = function() {
        return _grade
      }
    }
  }
  var student1 = new Student('Kate',15,'F',8)
  console.log("Name:",student1.getName())
  console.log("Age:",student1.getAge())
  console.log("Sex:",student1.getSex())
  console.log("Grade:",student1.getGrade())




  /////////Defining Static Methods//////////

  class Student {
    constructor(name,age,sex,marks) {
      this.name = name
      this.age = age
      this.sex = sex
      this.marks = marks
    }
    //defining a static method called "compareMarks"
    //it compares marks of two students
    static compareMarks(student1, student2){
      if (student1.marks > student2.marks){
        temp1 = student1.marks - student2.marks
        console.log(`${student1.name} scored ${temp1} marks more than ${student2.name}`)
      }
      else if(student1.marks < student2.marks){
        temp1 = student2.marks - student1.marks
        console.log(`${student2.name} scored ${temp1} marks more than ${student1.name}`)
      }
      else{
        console.log(`Both students scored ${student1.marks}`)
      }
    }
  }
  //change values of marks of both students to execute different if conditions in the function above
  var student1 = new Student('Kate',15,'F',25)
  console.log("Kate's marks are",student1.marks)
  var student2 = new Student('Joe',15,'M',20)
  console.log("Joe's marks are",student2.marks)
  //calling the static function
  Student.compareMarks(student1,student2)










  //Exercise 1: Time to Go Shopping!

  class Product{  
    constructor(_name,_price,_amount,_madeIn){
      var _name = _name
      var _price = _price
      var _amount = _amount
      var _madeIn = _madeIn
      
      this.getName = function(){
        return _name
      }
      this.getPrice = function(){
        return _price
      }
      this.getAmount = function(){
        return _amount
      }
      this.setAmount = function(num){
        _amount = num
      }
      this.getMadeIn = function(){
        return _madeIn
      }
    }
    canSell(num){
      if(this.getAmount() < num){
        return false
      }else{
        return true
    }
  }
  sell(num){
    var temp = this.getAmount()
    if(this.canSell(num)){
      this.setAmount(temp-num) 
      return this.getAmount()
    }else{
      this.setAmount(temp + (num*2)) 
      return this.getAmount()
    }
  }

}


//Exercise 2: Expired or Not?
class Product{  
    constructor(name,price,amount,madeIn,expiryDate,brand){
      //initializing properties 
      this.name = name
      this.price = price
      this.amount = amount
      this.madeIn = madeIn
      this.expiryDate = expiryDate 
      this.brand = brand
    }
     //it compares expiry dates of two students
    static checkExpiry(product1, product2){
      //getting the current date
      var currentDate = new Date()
      //first case: both the products have already expired
      if((product1.expiryDate < currentDate) && (product2.expiryDate < currentDate)){
        return "Neither"
      }
      //second case: product1 has expired but product2 has not
      else if((product1.expiryDate < currentDate) && (product2.expiryDate > currentDate)){
        return product2.brand
      }
      //third case: product2 has expired but product1 has not
      else if((product1.expiryDate > currentDate) && (product2.expiryDate < currentDate)){
        return product1.brand
    }
    //fourth case: neither of the products have expired
    else if ((product1.expiryDate > currentDate) && (product2.expiryDate > currentDate)) {
      //returning product1's brand name if its expiry date is later than product2's
      if((product1.expiryDate - currentDate) > (product2.expiryDate - currentDate)){
        return product1.brand
      }
      //returning product2's brand name if its expiry date is later than product1's
      else if((product1.expiryDate - currentDate) < (product2.expiryDate - currentDate)){
        return product2.brand
      }
      //returning "Either"  if both the products expire on same date in future
      else{
        return "Either"
      }
    }
  }
}