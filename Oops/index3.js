console.log("Good morning");
//"this" keyword

var employee = {
    name: 'Sonu',
    age: 20,
    designation: 'developers',
    //function returning designation of the employee

    display(){
        return this.designation; //using this to refer to the "employee" object

    }
}
//this will display the designation
console.log(employee.display());

//Setting Value Using this
/*Till now we were using this to get a property within an object;
 however, we can also use this to set the value of a property within an object.*/

 var employee = {
  
    name: 'Joe',
    age: 28,
    designation: 'developer',
    //function setting the value of "designation" equal to the parameter being passed to the function
    setDesignation(parameterValueOfDesig) { 
      this.designation = parameterValueOfDesig
    }
  }
  //displaying the value of "designation" at start
console.log("Old designation was:",employee.designation)
//updating the value of designation
employee.setDesignation('engineer')
//displaying new value of designation
console.log("New designation is:",employee.designation)


//////////////// Get keyword ////////////////////////
var employee = {
  
    name: 'Joe',
    age: 20,
    designation: 'developer',
//function returning designation of the employee
    get display(){
        return this.age;
    }


}
//this will display the designation
console.log(employee.age);


///////////////////Set keyword///////////
var employee = {
  
    name: 'Joe',
    age: 28,
    designation: 'developer',
    //function setting the value of "designation" equal to the parameter being passed to the function
    setDesignation(desig) { 
      this.designation = desig
    }
  }
  //displaying the value of "designation" at start
  console.log("Old designation was:",employee.designation)
  //updating the value of designation
  employee.setDesignation('engineer')
  //displaying new value of designation
  console.log("New designation is:",employee.designation)


  ////Another way to do this is by using the set keyword.
  var employee = {
  
    name: 'Joe',
    age: 28,
    designation: 'developer',
    //function setting designation of the employee
    set setDesignation(desig) {
      this.designation = desig //using this to refer to the "employee" object
    }
  }
  console.log("designation originally is:",employee.designation)
  employee.setDesignation = 'engineer'
  console.log("new designation is:",employee.designation)











  //Exercise 1: Let's Shop
  var product = {
    name: 'Cheese',
    price: 20,
    amount: 10,
    madeIn: 'USA'
  }
  console.log(product.name)
  console.log(product.price)
  console.log(product.amount)
  console.log(product.madeIn)

/*
  //Exercise 2: Let's iterate!
  var product = {
    name: 'Cheese',
    price: 20,
    amount: 10,
    madeIn: 'USA'
}
function set(){
    //write your code here
    for(x in product){
        if(x=="name"){
            product.name = 'Bottle'
        }
        else if(x=="madeIn"{
            product.madeIn = 'India'
        })
    }
}
*/

//Exercise 3: How much is the Bill?
var product = {
    //These are sample values, you can change them to whatever you want
    name: 'Cheese',
    price: 20, 
    amount: 10,
    madeIn: 'USA',
    //wrtie code for the function here 
    totalBill() {
        return (this.price*this.amount);
    }
}

// Exercise 4: Discount? Wow
//Part 1: declare the function with appropriate parameters "without" using the set keyword and implement it as well.
var product = {
    name: 'Cheese',
    price: 20,
    amount: 10,
    madeIn: 'USA', 
    totalBill() {
        return (this.price*this.amount)
    },
    //write the correct declaration and also write the implementation
    setPrice(){
        this.price = pri*0.90
    }
}

//Part 2: declare the function using "set" keyword and appropriate parameter/parameters, implement it and call it.
var product = {
    name: 'Cheese',
    price: 20,
    amount: 10,
    madeIn: 'USA', 
    totalBill() {
        return (this.price*this.amount)
    },
    //write the correct declaration and also write the implementation
    set setPrice(pri){
        this.price = pri*0.90}
}

//Zero is just a default value, change it to set temp equal to a number of your choice.
//the test case will run for the value of temp that you set
var temp = 0

function testFunc(){
    //call setPrice and set the new value of "price" equal to "temp" here    
    product.setPrice = temp  
}