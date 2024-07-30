//step no-1//forEach function not return value 

const arr = [1,2,3,4,5,7,6];

const newarr = arr.forEach((val)=>{
    return val<4;
})

//console.log(newarr);

// step no-3 filter function aata h 

let newarr2 = arr.filter((val)=> val>4 )
//console.log(newarr2);

//step n-3 this is possibale from for_each

let arr3 =[];

arr.forEach((val)=>
{
    if(val>4)
    {
        arr3.push(val);
    }
})

//console.log(arr3);

//step no-4 you can use {}in filter then you will retun 

 newarr2 = arr.filter((val)=>
    {
        return val>4
    })
//console.log(newarr2);

//**************map methorde */

//step no-1

let arr4 = [1,2,3,4,5,6,7,8,9,10];

// let arr5 = arr4.map((num)=>{
//     return num+10
// })

//console.log(arr5);//this is auto retun the value

//step no-2 chaning

// map -> map -> filter

let arr5 = arr4
            .map((num)=>num*10)
            .map((num)=>num+1) 
            .filter((num)=>num>50)  


console.log(arr5);








