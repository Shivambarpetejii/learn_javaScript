console.log(`hii maths`);
let nums = 10000;
//value is always positive 
console.log(Math.abs(-100));
// valu always in a single digite is a normal form
console.log(Math.round(1.2939));
console.log(Math.round(1.5939));
//valu always pick on floor down 
console.log(Math.floor(1.5939));
// valu always pik on top
console.log(Math.ceil(1.5939));

//in array you will find min and max

const arr = [1,2,34,4,0,5,6];

console.log(Math.max(1,2,34,4,0,5,6));
console.log(Math.min(1,2,34,4,0,5,6));

//rendom number is always pic 1 and 0 in between 
console.log(Math.random());

let min =10;
let max =20;

console.log(Math.floor((Math.random()*(max-min+1))+min));
