# project number 01 :- color change with the help of javaScipt

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


```
const botoons = document.querySelectorAll(".button");
const body = document.querySelector('body');
botoons.forEach(function(B){
  B.addEventListener('click',function(e)
  {
    switch(e.target.id)
    {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'white':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;

      default:
        break;
    }
  })
  
  
})





/*
B.addEventListener('click',function(e){
    if(e.target.id == 'grey' )
    {
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id == 'white' )
    {
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id == 'blue' )
    {
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id == 'yellow' )
    {
      body.style.backgroundColor = e.target.id;
    }

  })
*/
```