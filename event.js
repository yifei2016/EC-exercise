<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
  
</head>
<body>
  
  <div id='div'>div</div><br>
  
  <div id='div2'>div2</div><br>
  
    <p type="text" name="username" id='para'>dfdsf</p>
  <br>
  <div >
    <input type="text2" name="username2" id='input2'>
  </div>
  <h2 id='love'>i love apple</h2>
  
  
    <input type="text2" name="r" id='i'>
  <div id="div3"></div>
  
  <br>
  <input type="text" name="r" id='ind'>
</body>
</html>







let div = document.getElementById('div');
div.addEventListener('mouseenter', function(event) {
	event.target.style.backgroundColor = 'red';
})
div.addEventListener('mouseleave', function(event) {
  event.target.style.backgroundColor = 'hotpink';
})


let div2 = document.getElementById('div2');
div2.addEventListener('mouseenter', function(event){
    event.target.style.fontSize = '150%';
})
                      
let para = document.getElementById('para');
para.addEventListener('mouseover',function(event){
    para.style.color= 'red';
})

let input2 = document.getElementById('input2');
input2.addEventListener('input',function(event){
    
    if(isNaN(input2.value)){
       input2.style.color = 'red';
       //input.className = "invalidNumber"; before we have class in css
    }else{
       input2.style.color = 'green';
    }
})

let h2 = document.getElementById('love');
h2.addEventListener('mouseover',function(event){
  h2.style.fontSize = '500%';
})

let i = document.getElementById('i');
let div3 = document.getElementById('div3');

i.addEventListener('input',function(event){
  div3.innerHTML = i.value; 
})



let ind = document.getElementById('ind');
ind.addEventListener('input',function(event){
  this.value = this.value.toUpperCase();
})
ind.addEventListener('keypress',function(event){
  info.innerHTML = info.innerHTML.toUpperCase();
  event.key;
  cap.value += event.key.toUpperCase();
  event.preventDefault();
})
