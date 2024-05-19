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
        ----------------memory--------------
        1. stack  (primitive) (copy) 
        2. heap   non premitive refrence


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




