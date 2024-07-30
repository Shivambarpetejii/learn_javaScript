
//step no:-1 for loop syntex

for(let i=0; i<=10; i++)
{
    //console.log(i);
}


//step no -2  if-else ststetment in for loop

for (let i = 2; i < 10; i++) {

    if(i%2==0)
    {
       // console.log(`${i}, is even number`);
    }
    else{
       // console.log(`${i}, is a odd number`);
    }
    
}

//step no-3 for loop in for loop

for(let i=0; i<4; i++)
{
    for(let j=0; j<=i; j++)
    {
        let srt = "* "
        console.log(srt.repeat(i));
    }
}

//setp no-4 array for loop 

let array = ["ka","mogli","bghira","baallu"]
for (let i = 0; i < array.length; i++) {
    const element = array[i];

    //console.log(element);
    
}

// step no-5 continue stetment

for (let i = 0; i < 20; i++) {
    const element = array[i];
    if(i==5)
    {
        continue;
    }
    //console.log(i);
    
}


// step no-6 break stetment

for (let i = 0; i < 20; i++) {
    const element = array[i];
    if(i==5)
    {
        break;
    }
   // console.log(i);
    
}
