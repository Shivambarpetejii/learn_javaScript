// //step no 01 this keyword btata h corent context ko 
// const user = {
//     usernaem : "shivam",
//     price : 343,

//     wellcomeM : function(){
//         console.log( `${this.usernaem}, wellcome tho over wesite`);
//         console.log(this);
//     }
    
// }
// user.wellcomeM();
// user.usernaem="shi";
// user.wellcomeM();

// console.log(this);




// //step no -2 In funcation this keyword work different

// function chai(){


//     const username = "shivam";
//     console.log(this.username);// not be access
    
//     //console.log(this);// aese use kr skte hh 
// }


// //step no-4 this is another way to decleear to function
// const chai = function(){
//     const username = "shivam";
//    console.log(this.username);
    
// }


// //step no -5 this arrow funcation 
// const chai = ()=>{
//     const username = "shivam";
//     console.log(this.username);
// }


// // step no -6 arrow

// const chai = (n1,n2) => {
//     console.log(n1+n2);
// }



// // step no -7 arrow

// const chai = (n1,n2) => (console.log(n1+n2))

// // step no -8 arrow

// const chai = (n1,n2) => console.log(n1+n2)



chai(2,4);