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


*********************************************************************************************************************************************
*********************************************************************************************************************************************


Question no 2 :=====. What are the different data types present in javascript

// data_type in javascript 

//1.primotive Data type == this is immutable and directly stroed into memory

//A.string === it is represent and stroed thie series of chrrecter in memory

let type01 = "shivam barpete";//this is double quotes
let type02 = 'shivam barpete jii'//this is single quotes
let type03 = `shivam barpete jii jii`//this is template literals (ES6)

console.log(`${type01}....${type02}....${type03}`)// this is template literals to provide to faclities write string and also implement variables , javascript is ${} under this sighn

//B number === representing the interger values and floating values

let number01 = 12;//this is interger values
let number02 = 12.12// this is float values
let number03 = Infinity//this is INFINITY value in positive side
let number04 = -Infinity//this is -INFINITY value in Nagetive side
let number05 = NaN // this is not a number 

console.log(
`this is interger value === ${number01}:${typeof(number01)}
this is float values === ${number02}:${typeof(number02)}
this is INFINITY value in positive side === ${number03}:${typeof(number03)}
this is -INFINITY value in Nagetive side === ${number04}:${typeof(number04)}
this is not a number  === ${number05}:${typeof(number05)}`
)

//C Bigint === represent all big number 

let biginttype = 12342n;
console.log(`${biginttype}:${typeof(biginttype)}`)

//D undefiend values === vaiable decleered but not assign 

var x;
console.log(`${x}:${typeof(x)}`)

// E NULL ==== represents a non existent vluse and invalid value
var z =null;
console.log(`${z}:${typeof(z)}`)

// F boolean valu have logical values like true ans false 0 and 1
let y = false;
let a = true;
console.log(`${y}:${typeof(y)}`)
console.log(`${a}:${typeof(a)}`)

// symbol === representing the anonymous value and unque value

var smy1 = Symbol('id');
var smy2 = Symbol('id');
console.log(`${typeof(smy1)}`)
console.log(`${typeof(smy2)}`)
console.log(smy1==smy2)
console.log(smy1===smy2)


// 2 Non primmitive data in javascript

//to store the mutable, muultipale and complex value
//store by refrence

//A Object == storeed structured data and it is the collection of key- value pain in between {}

let obj10 = {name : "shiva"};
console.log(`${obj10} ======= type of object=======${typeof(obj10)}`);

// B Array == is stores the ordered data collection 
//store multipale values 

let arr = [10,2,2,2,2,2];
console.log(`${arr} ======= type of array=======${typeof(arr)}`);

//C Function === function is block of code that is use multiple time in our code  it is also object 

let fun = ()=>{return 123};
console.log(`${fun} ======= type of function=======${typeof(fun)}`);

//D Date add in ES6 represent the current time and date

let date = new Date();
console.log(`${date} ======= type of date=======${typeof(date)}`);

*********************************************************************************************************************************************
*********************************************************************************************************************************************

2. Explain Hoisting in javascript.
3. 
//hosting with function
name();
function name(){
    console.log("hello")
}//this meains funcation are sport hosting case in js 


//hosting with var
console.log(a)
var a="shivam";
console.log(a);//this case var hosting sport hosting but before decreing return undefind

// //hosting with let and const 
// console.log(b)
// let b;
//  b="ram";
 
 //hosting with function expression 
 console.log(sum(a,b));
 var sum =  function(a=6,b=5){
     return a+b;
 }
*********************************************************************************************************************************************
*********************************************************************************************************************************************
3. Why do we use the word “debugger” in javascript?



*********************************************************************************************************************************************
*********************************************************************************************************************************************
4. Difference between “ == “ and “ === “ operators.
 var a=2;
var b="2";

console.log(a==b);
console.log(a===b)

*********************************************************************************************************************************************
*********************************************************************************************************************************************


What is the difference between Call, Apply and Bind


function greet(message, course){
    console.log(`${message } tune ${this.name} yr ${course }vala course`)
    
}

const persion={name : "shivam barpete"};
const persion1={name : "krishna barpete"};
greet.call(persion,"englisdh" ,"kya bni h re")
greet.call(persion1,["englisdh" ,"Kya bni h re"])













