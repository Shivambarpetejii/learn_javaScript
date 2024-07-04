console.log(`hii date and time`);

// date by default calculate in 1 jan 1970 in mili second


// const mydate = new Date();
// console.log(mydate);// this console is readable that resion i will create mathode

// console.log(mydate.toString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleTimeString());
// console.log(typeof(mydate));

// i will create a my own date 

// const mydate = new Date(2023,0,14);

// console.log(mydate.toString());//month is count on date and time is always 0 = jan


// const mydate = new Date(2023,0,14,5,3);
// console.log(mydate.toLocaleString());

// in form of string 
// const mydate = new Date("2023-01-12");
// console.log(mydate.toLocaleString());

// most important is miliseconde time 
// let inmili = Date.now();

// console.log(inmili);
// console.log(inmili/1000);//get into in second

const mydate = new Date();
console.log(mydate.getDate());

