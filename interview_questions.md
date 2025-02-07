Question Number 01 :- What are the possible ways to create objects in JavaScript

//This is way of object literal way,,,,,
//This is very simple way of object creation 
var obj = {
    name:"shivam",
    age:25
}
console.log(obj);

//this is constructor way to create a obj 
//this is not recommended way to create obj
var obj2 = new Object();
obj2.name ="shivam barpte";
obj2.age = 24;
obj2.sayHii = function(){ return `Hello ${this.name} wellcome our code!!`}
console.log(obj2.sayHii());

//in constructor way Object() is built in constructor then new keyword is not required
var obj3 =  Object();
obj3.name ="shivam barptejii";
obj3.age = 24;
obj3.sayHii = function(){ return `Hello ${this.name} wellcome our code!!`}
console.log(obj3.sayHii());


//this is way to create object in create method in there situation obj prototype is null 
let obj4 = Object.create(null);
obj4.name="ram";
console.log(obj4);


//this is way to create object in create method in there situation obj is null 
let obj5 = Object.create({});
obj5.name="ramram";
console.log(obj5);

//In  this create method you can marge property two or more object easly
let vehicle = {
  wheels: '4',
  fuelType: 'Gasoline',
  color: 'Green'
}
let carProps = {
  type: {
    value: 'Volkswagen'
  },
  model: {
    value: 'Golf'
  }
}

var car = Object.create(vehicle, carProps);
car.name = 'tata_punch'
console.log(car);
console.log(car.wheels);
console.log(car.type);

//this is function constructor way to create object

function Person(name){
    this.name = name;
    this.age = 23;
    this.school = "nhi pda me abhi tk ";
    
}

let obj6 = new Person("krishna");
console.log(obj6)


//this is Object.assign method for object creation in js
// you can marge two object in one object;

let org={company:'tata'}; 
let car1={name:'toyota'}; 
let staff = Object.assign({},org,car1);
console.log(staff)


//this is ES6 class method to create class in javascript
class Person1{
  constructor(name){
      this.name= name;
  }
    
};

let obj7 = new Person1("ramjiii");
console.log(obj7);

//this is singleton pattern object 

var obj8 = new (function(){
    this.name = "kon";
    
})();
console.log(obj8);
console.log(obj8);















