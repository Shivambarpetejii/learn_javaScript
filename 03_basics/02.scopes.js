// //step no-1 scopes is a {}
// if(true)
// {
//     let a = 10;
//     const b = 20;
//     var c = 30;

// }


// //console.log(a); //this is safe frist error 
// //console.log(b); // this is safe second error

// console.log(c);// that is problem because if var c is in block scope then
//                 //then there life is only for block scope {}

// // scopes are two type 
// // 1 globl scope
// // 2 block scope


// //step no-02  closure in js 
  
//   function one(){

//     const username = "shivam barpete";

//     function tow(){
//         const age ="24";
//         console.log(username);

//     }
//     tow();

//    // console.log(age);// this is in funcation two scopes 
//   }
//   one();



// //step no 04 if and else scope

// if(true)
// {
//     const username = "hello";

//     if(true)
//     {
//         console.log(username);
//         const age = "33";

//     }


//     //console.log(age);// this is in block scope
// }



// step no-5 

// expresson

// const addtwo = function(num){
//     return num+2;

// }


//step no 06 this is a problem

// console.log(addtwo(100));//this is a normal 

// console.log(addtwo(100));
// const addtwo = function(num){
//     return num+2;

// }//this is an error

