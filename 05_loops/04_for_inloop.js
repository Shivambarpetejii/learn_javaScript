//step no-1 for-of loop object pr kam nhi krta h 

//then for_in loop 

const obj = {
    name : "shivam",
    age  : "56",
    edu : "12th"
}

for (const key in obj) {
  //  console.log(`${key},is the valu of ${obj[key]}`);
   
}


//step no-3 array pr bhi lg jata h

const myarr = [1,23,4,5,6,6];

for (const key in myarr) {
    //console.log(`${key},is the valu of ${myarr[key]}`);
}


//step no -4 for_in loop se map itret nhi hota h 