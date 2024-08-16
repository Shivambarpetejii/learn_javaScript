# project number 01 :- color change with the help of javaScipt

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


``` javaScript
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

#project No = II

``` javaScript
const form = document.querySelector('form');

form.addEventListener('submit',function(e){
e.preventDefault();

  const height = parseInt( document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);

const results = document.querySelector('#results');

if(height === '' || height<0 || isNaN(height))
{
  results.innerHTML =`"Plese Enter Valid Height !!"`;
  
}
else if(weight === '' || weight<0 || isNaN(weight))
{
  results.innerHTML  =`"Plese Enter Valid weight !!"`;

}
else{
  let BMI = (weight / ((height * height) / 10000)).toFixed(2);
  results.innerHTML = `<span>${BMI}</span>`;
}


})






```