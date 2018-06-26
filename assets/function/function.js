
gameStart();
var object={
    num:[],
    options:[]
}
function getOpt(){
    num1=parseInt(document.querySelector('.num1').textContent);
    num2=parseInt(document.querySelector('.num2').textContent);
    var opt1=Math.floor(Math.random()*10);
    var opt2=Math.floor(Math.random()*10);
    var opt3=num1*num2;
    
    // show options
}
function gameStart (){
// get a random number
var num1=Math.floor(Math.random()*10);
//get the other random number
var num2=Math.floor(Math.random()*10);
  // show numbers
  console.log(num1,num2);
   document.querySelector('.num1').textContent=num1;
   document.querySelector('.num2').textContent=num2;
 getOpt(num1,num2);

 //add event listener
//  document.querySelector('opt1').addEventListener('click',function(){
     
//  })
}




