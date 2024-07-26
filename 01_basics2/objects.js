// symbole declretion 
  const mySum = Symbol("key1");


// singleton :- this objects only created by constructor methode 

  Object.create   // this is singlton object

// Objects Literats 

    const jsUser = {
        name : "shivam",
        email : "barpete@gmail.com",
        age : "23",
        //symbole acsess in object
        [mySum]:"keykey",
        days : ["mon","thu","fir"],
        "user name" : "@shivanbarpete"
    };



    //********acsess by DOT notetion */
    // console.log(jsUser.name);
    // console.log(jsUser.email);
    // console.log(jsUser.age);
    // console.log(jsUser.days);

    // this is normmail way 

    //*********this is square notetion */

    // console.log(jsUser["name"]);
    // console.log(jsUser["user name"]);

    //console.log(jsUser[name]); this is wrong 

    //************console krna symbole ko */

    //console.log(jsUser[mySum]);

    //******************object freezeing */

    // console.log(jsUser.name);
    // jsUser.name = "ramjii";
    // console.log(jsUser.name);

    // Object.freeze(jsUser);

    // console.log(jsUser.name);
    // jsUser.name = "ramjii";
    // console.log(jsUser.name);

    //********************object funcation  */

    // jsUser.greeting = function(){
    //     console.log("hello");
    // }
    // console.log(jsUser.greeting);  //return a funcation
    // console.log(jsUser.greeting());


