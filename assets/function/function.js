
gameStart();
function getOpt(){
    num1=parseInt(document.querySelector('.num1').textContent);
    num2=parseInt(document.querySelector('.num2').textContent);
    // show options
    // document.querySelector('.opt1').textContent=opt1;
    // document.querySelector('.opt2').textContent=opt2;
    // document.querySelector('.opt3').textContent=opt3;
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
 document.querySelector('.num').addEventListener('click',function(){
     if(this.textContent==num1*num2){
         alert('you made it right');
         gameStart();

     }
     else{
         alert('you made it wrong');
         gameStart();
     }


 })
}



