//*****************This is a singleton objects  */

// // step no:-1 creation of object
// const tindeerUser = new Object();  
// console.log(tindeerUser);


// //step no-2 put some key and key-value
// const tindeerUser = new Object();
// tindeerUser.id = "1234@";
// tindeerUser.name= "shivam";
// tindeerUser.logIn= true;
// console.log(tindeerUser);


// //step no -3 multilavel object in js
// const regulerUser ={
//     email : "exam@gmail.com",
//     fullName:{
//         userName:{
//             firstName : "shivam",
//             lastName : "barpete"
//         }
//     }
// }

// console.log(regulerUser.email);
// console.log(regulerUser.fullName);
// console.log(regulerUser.fullName.userName);
// console.log(regulerUser.fullName.userName.firstName);
// console.log(regulerUser.fullName.userName.lastName);


// //step no -4 all add methored
// const obj1 = {1:"a",2:"b"};
// const obj4 = {3:"c",4:"d"};
// const obj3 = {5:"e",6:"f"};

// const objAns = {obj1,obj3};
// console.log(objAns); // this answer will be sepreted in object 

// const objAns2 = Object.assign({},obj1,obj3,obj4);
// console.log(objAns2); //this case is all object are marge

// const objAns3= {...obj1,...obj3,...obj4};//this is spret mathod 
// console.log(objAns3);


// //step no -4  sepreted all key ,keyvalue , entries,
// const obj1 = {1:"a",2:"b",3:"c",4:"d",5:"e",6:"f"};

// const objKey = Object.keys(obj1);
// console.log(objKey);

// const objVal = Object.values(obj1);
// console.log(objVal);

// const objEntries = Object.entries(obj1);
// console.log(objEntries);

// const objIs = obj1.hasOwnProperty('5');
// console.log(objIs);


// //step no-5 destructureching ways
// const course = {
//     courseName : "javaScript Hello",
//     price : "432",
//     whoIam : "shivam"
// }

// console.log(course.whoIam); //this is write but you can use more time then hey will not write way

// const {whoIam} =course;
// console.log(whoIam);

// const {whoIam:namee} =course;
// console.log(namee);

/*step no -6  api knowledge
 001:- database always send the data in json formet 
 002:- json - javaScript object Notetion
 003:- json formet is both object and array
 004:- {}
 005:-[{},{},{}]

*/

