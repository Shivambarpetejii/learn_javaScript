// const arr = [1,2,3];

// const arr1 = arr.reduce(function (acc,curval)
// {
//     return acc+curval;
// },0)

// console.log(arr1);



// const arr = [1,2,3];

// const arr1 = arr.reduce( (acc,curval)=>(acc+curval),0)

// console.log(arr1);

const arrtocart = [
    {
        course : "java",
        price : 1000
    },
    {
        course : "java2",
        price : 6000
    },
    {
        course : "ja2va",
        price : 8000
    },
    {
        course : "jav5",
        price : 5000
    },
]


let totaPay = arrtocart.reduce((acc,item)=>(acc+item.price),0);

console.log(totaPay);