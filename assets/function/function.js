
gameStart();
function getOpt(){
    num1=parseInt(document.querySelector('.num1').textContent);
    num2=parseInt(document.querySelector('.num2').textContent);
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
  document.querySelector('.opt1').textContent=Math.floor(Math.random()*10);
  document.querySelector('.opt2').textContent=Math.floor(Math.random()*10);
  document.querySelector('.opt3').textContent=num1*num2;

 //add event listener
 document.querySelector('.opt3').addEventListener('click',function(){
    gameStart();
 })
 document.querySelector('.opt1').addEventListener('click',function(){
  document.querySelector('.show').textContent="Sorry Wrong"
  setTimeout(window.location.href = window.location.pathname + window.location.search + window.location.hash,800);
  

 })
document.querySelector('.opt2').addEventListener('click',function(){
  document.querySelector('.show').textContent="Sorry Wrong"
  setTimeout(window.location.href = window.location.pathname + window.location.search + window.location.hash,800);
  
 })
}



