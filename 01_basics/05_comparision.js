console.log(2<2);
console.log(2>2);
console.log(2<=2);
console.log(2>=2);
console.log(2!=2);
console.log(2==2);

//but your confort you will always same datatype

console.log("2">1);


console.log(null>0);
console.log(null==0);
console.log(null<0);
console.log(null<=0); // in case js is put a conversion it is not good for devlopment it only for knowledge

console.log(undefined>0);
console.log(undefined<0);
console.log(undefined==0);



/*  
        ----------------datatypes--------------
        
        primitive datatype (call by value)
           1. number 
           2.string
           3.boolean
           4.Null
           5.symbole
           6.undefined
           7.bigint
        
        Non-primitive (call by refrence)
           1. array
           2.object
           3function 



*/

let name = "shivam barpete";
let name1 = name;
console.log(name);
console.log(name1);

name1 = "ram ram";
console.log(name);
console.log(name1);



let user1= {
    nam :"shivam",
    age: 46,

}
let user2 = user1;
console.log(user1.age);
console.log(user2.age);

user2.age = 66;
console.log(user1.age);
console.log(user2.age);

/* **************memory*****************

//         1. stack  (primitive) (copy) 
//         2. heap   non premitive refrence

    
*/


let var1 = 123;
let var2 = var1;

console.log(var1);
console.log(var2);
// change the valu 
var2 = 12333;

console.log(var1);
console.log(var2);
// example pass by value

let hero = {
   heroname: "ram",
   hero2name: "krishna",
   hero3name: "lakshman"
}

let hero2 = hero;

console.log(hero);
console.log(hero2);

//change 
hero2.heroname ="ram ram";
console.log(hero);
console.log(hero2);
//example call by value




