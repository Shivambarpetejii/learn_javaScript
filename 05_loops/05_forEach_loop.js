//step no-1 for each loop is high order funcation h

const arr = [1,2,3,4,3,21,3];

arr.forEach( function  (item){
    //console.log(item);
})//function name nhi lgate h 

//step no-2 is forEach for arrow funcation

arr.forEach( (items)=>{
   // console.log(items);
})// name nhi lgate h 


//step no -3 fonEach from fincation

function printarray(key){
    //console.log(key);
}

arr.forEach(printarray);

//step no -4  forEach me three valu aati h  value ,index, arrlist

arr.forEach((val,index,arr)=>{
    //console.log(val,index,arr);
})


//step no-6 object in array[{}{}{}]

const arr1 =[
    {
        name:"shiv",
        age:"100"
    },
    {
        name:"krish",
        age:"4100"
    },
    {
        name:"ram",
        age:"1040"
    }
]

arr1.forEach((i)=>{
    //console.log(i);
    // console.log(i.name);
    console.log(i.age);
})

