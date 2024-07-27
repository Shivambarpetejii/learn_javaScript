// IIFE  =  immediately Invoked Funcation Expression
/* work on two things ;- 
                         1. the global scope variables create polution ,then with the help of iife i will clare
                         2. funcation run immedeately */


                         //step no;-1 run funcation immedeately 

                         //()()

                         (function(){
                            console.log("wellcome to iife world");
                         })();

                        // argument passing 
                         (function(name){
                            console.log(`${name},wellcome to iife world`);
                         })("shivam");

                         (()=>{
                            console.log("wellcome to iife world");
                         })();


