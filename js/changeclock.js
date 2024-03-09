var started    = document.getElementById('started');  
var started1   = document.getElementById('started1'); 
var countdown2 = document.getElementById('countdown2');  
var countdown3 = document.getElementById('countdown3'); 


function changeclock(){

  if (started.style.display == 'none') {  
    started   .style.display = 'block';  
    started1  .style.display = 'none';  
    countdown2.style.display = 'inline';  
    countdown3.style.display = 'none';  
    localStorage.setItem("clock","zk")
  } 
  else {  
    started   .style.display = 'none';  
    started1  .style.display = 'block'; 
    countdown2.style.display = 'none';  
    countdown3.style.display = 'inline';  
    localStorage.setItem("clock","hj") 
  }  
} 

if(localStorage.getItem("clock")=="zk"){
    started   .style.display = 'block';  
    started1  .style.display = 'none';  
    countdown2.style.display = 'inline';  
    countdown3.style.display = 'none';  
  } 
  else if(localStorage.getItem("clock")=="hj"){
    started   .style.display = 'none';  
    started1  .style.display = 'block'; 
    countdown2.style.display = 'none';  
    countdown3.style.display = 'inline';  
  }
  else{  
    started   .style.display = 'block';  
    started1  .style.display = 'none';  
    countdown2.style.display = 'inline';  
    countdown3.style.display = 'none';  
    localStorage.setItem("clock","zk")
  } 