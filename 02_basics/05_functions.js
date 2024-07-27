// // step no-1 syntex 

// function myName(){
//     console.log("shivam Barpete");
// }//this is a function 

// myName();//this is function calling 


// //step no 2 add two number
// function addTwonumber(number1,number2){
//     let sum = number1+number2;
//     return sum;
// }//number1 and number2 is a paramerter .... 

// let ans = addTwonumber(3,4)// ans 3 and 4 is arguments 

// console.log(ans);

//step no -3 in case you will not sent any data 
// function addTwonumber(number1,number2){
//     let sum = number1+number2;
//     return sum;
// }//number1 and number2 is a paramerter .... 

// let ans = addTwonumber()// ans 3 and 4 is arguments 

// console.log(ans);//return always NaN(not a number)

// hendel the setuation
function addTwonumber(number1,number2){
    if(typeof(number1) == Number && typeof(number2) == Number )
    {
        let sum = number1+number2;
        return sum;

    }
    else{
        console.log("plz log a valid number");
    }
   
   
}//number1 and number2 is a paramerter .... 

let ans = addTwonumber(3,4)// ans 3 and 4 is arguments 

console.log(ans);




