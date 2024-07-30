//step no-1 for-of loop normal arry

const arr = [1,2,3,41,2,3,4];

for( const element of arr)
{
    //console.log(element);
}


//step no-2 for_of for string 

const str = "hello world!";

for (const element of str) {
   // console.log(element);
    
}

//step no-3 for_of loop for map

//map store the data in form of key and value 
// IN map key is allways uniqe
//In map store the data in maner way and remember the order

const map = new Map();

map.set('IN','India');
map.set('MP','madhya');
map.set('USA','amirica');

//console.log(map)

for (const [key ,value] of map) {
    //console.log(key,':-',value);
    
}


//step no-4 for_of not work on object
