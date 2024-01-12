var a = document.getElementById('countdown');  
var b = document.getElementById('countdown1'); 
var c = document.getElementById('countdown2');  
var d = document.getElementById('countdown3'); 


function changeclock(){
  if (a.style.display == 'none') {  
    a.style.display = 'flex';  
    b.style.display = 'none';  
    c.style.display = 'inline';  
    d.style.display = 'none';  
    localStorage.setItem("clock","zk")
  } 
  else {  
    a.style.display = 'none';  
    b.style.display = 'flex'; 
    c.style.display = 'none';  
    d.style.display = 'inline';  
    localStorage.setItem("clock","hj") 
  }  
} 

if(localStorage.getItem("clock")=="zk"){
    a.style.display = 'flex';  
    b.style.display = 'none';  
    c.style.display = 'inline';  
    d.style.display = 'none';  
  } 
  else if(localStorage.getItem("clock")=="hj"){
    a.style.display = 'none';  
    b.style.display = 'flex'; 
    c.style.display = 'none';  
    d.style.display = 'inline';  
  }
  else{  
    a.style.display = 'flex';  
    b.style.display = 'none';  
    c.style.display = 'inline';  
    d.style.display = 'none';  
    localStorage.setItem("clock","zk")
  } 