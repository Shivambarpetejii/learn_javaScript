/* Function :-  A function in javaScript is reusable block of code to perform a specific  task, you can be invoke whenever needed.

 Function syntex 
                 function functon_name (){
                 //code to prforme
                 } 


 Return Statement:- 
                there are some situations when we want to return some values from function after performing some operation 
                you can reeturn values 
                you can return function also 
 
                
 calling function:-
                After defing  a function, the net step is to call them to make use the function 

  why function :-
                1. reducing redundancy 
                2. manageable code
                3. manage complexity 
                4. recursive call

Function Invocation :-
                1. trigger event 
                2.expicitly called 
                3. self-invoking (automatically execution)




self-executing function :- 
                        is a function in js that does not need to be called for its execution it executes itself as soon as it is created in the js file.
                        --this functon does not have a name its aslo called an anonymous function 
                        ()()


Function Expression :- the js function expression is used to define a function inside any expression 
                        0-allow to anonymous function (the main defrent between function expretion and function declretion )
                        1-a function exp can be used as an IIFE
                        2-stored in variable and accessed using variable name 

                        syntex for function declaration :  function function_name(parameters){
                                                                 statements...
                                                                return ...}

                        syntex for fuction expresion(anonymous); let variableNmae = function(parameters){
                                                                        statements..
                                                                        return ..}
                        syntex for fuction expresion(named); let variableNmae = function functionName(parameters){
                                                                        statements..
                                                                        return ..}

Arrow Function :-   Arrow funcation is one of the most ussed and effecient methods to create a funcation in js because of its easy to implementation.
                    0- introduce in ES6
                    1- syntex ;- let function_name - (parameters)=>{
                        steatements...
                        }
 */    

                        

// //function Definations

// function one(name)//parameters 
// {
//     console.log(name);

// }
// one("shivam");  // function calling 




//return value in function 

// function two(a,b)
// {
//     return a+b;//return statement in function 
// }

// let ans = two(2,3);
// console.log(ans);//return value in ans 




// //function expression 

// let three = function(a)
// {
//     return a**2;

// }

// console.log(three);//function three
// let ans = three(5);console.log(ans);//25 
// let ans1 = three();console.log(ans);// if any case you can not provide arguments return NAN




///////type of function in js 



// // 01- named function 

// function add(a,b)
// {
//     return a*b;

// }

// console.log(add(3,4));



// // 2 Anonymous function 

// let name = function(a,b)
// {
//     return a/b;
// }
// console.log(name(10,5));




// 3 nested functions


// function mag(firstName)
// {
//     function hey()
//     {
//         console.log(firstName);
        
//     }

//     return hey();
// }

// mag("ram");



// // IIFE

// (function()
// {
//     console.log("hii i am shivam ");
    
// })();



// let ans= (function()
// {
//     console.log("hii i am barpete ");
//     return "shivam";
    
// })();

// console.log(ans);




/* javascript function call 
                            the call() method is a predefined javascript method.
                            01-this allows borrowing methods from other objects
                            syntex -
                                    let result = function_name.call(this,arguments);
                                    console.log(result);
                            
                            */

                    //         let employee = {
                    //             details: function(location,exp)
                    //             {
                    //                 return this.name+" "+this.id+ location+exp;
                    //             }
                    //         }

                    //         let emp1 = {
                    //             name:"shiavm",
                    //             id:"1234"
                    //         }

                    //         let emp2 = {
                    //             name : "krishna",
                    //             id:"420"

                    //         }


                    // //console.log(emp1.name + " " + emp1.id);
                    

                    // // call() method
                    // let ans = employee.details.call(emp1,"manager","4 year");
                    // console.log(ans);
                    


                    // // apply() methoed   

                    // let ans1 = employee.details.apply(emp2,["coch","kamvana", "vana",8]);
                    // console.log(ans1);
                    

                    // //binnd()

                    // let ans2 = employee.details.bind(emp1,["vaha","gya"]);
                    // console.log(ans2);//always return in function 
                    // console.log(ans2());
                    
                    
                    


//   major diffrent between function declaration vs function expression


// ans();

// function ans(){
//     console.log("i am shivam ");
    
// };


// ram();
// let ram = function(){
//     console.log("hii i am ");
    
// }






//function Constructor


// we can create the instance using new keyword


// function Person(name,age)
// {
//     this.name= name;
//     this.age= age;


// }


// let person = new Person("shivam",45);

// console.log(typeof person); //object 

// console.log(person);//object

// console.log(person.name);



///parameter in funcation 


// 01 - default parameter in js



// (function ans1( value =1, value1){
//    console.log(value);
//    console.log(value1);
    

// })();



// // rest parameter 

// (function ans1(...num){
//     console.log(typeof num);//object

//     for(let i=0; i<num.length; i++)
//     {
//         console.log(num[i]);
        
//     }
    
     
 
//  })(2,3,4,5,5,6,7);




// Argument object


// (function ans1(){
//     console.log(typeof arguments);//object

//     for(let i=0; i<arguments.length; i++)
//     {
//         console.log(arguments[i]);
        
//     }
    
     
 
//  })(2,3,4,5,5,6,7);



//Argument pass by value

// it is send the copy of the variable does not send the add

// let ans1 = (name)=>{
//     console.log(name);

//     name = "barpete";

//     console.log(name);// this is only copy not org
    
    
// }

// let name= "shivam";
// ans1(name);

// console.log(name);



// object passed by refrence

// function ans3(ans){
//     console.log(ans);

//     ans.age=34;
       
// }


// let ans = {
//     name:"shivam",
//     age:45
// }
// ans3(ans);

// console.log(ans);




















 