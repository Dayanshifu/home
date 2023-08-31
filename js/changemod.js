var a = document.getElementById('wg');  
var b = document.getElementById('sites');  

function changemod(){
  if (b.style.display === 'none') {  
    b.style.display = 'block';  
    a.style.display = 'none';  
    localStorage.setItem("mod","a")
  } else {  
    b.style.display = 'none';  
    a.style.display = 'block';  
    localStorage.setItem("mod","b")
  }  
}
if(localStorage.getItem("mod")=="a"){
    b.style.display = 'block';  
    a.style.display = 'none';  
} 
else if(localStorage.getItem("mod")==null){
    b.style.display = 'block';  
    a.style.display = 'none';  
    localStorage.setItem("mod","a")
}
else{  
    b.style.display = 'none';  
    a.style.display = 'block';  
} 