var wg = document.getElementById('wg');  
var sites = document.getElementById('sites');  
var wordl = document.getElementById('word')

function changemod(){
  if (sites.style.display == 'none') {  
    sites.style.display = 'block';  
    wg.style.display = 'none';  
    localStorage.setItem("mod","sites")
  } else {  
    sites.style.display = 'none';  
    wg.style.display = 'block';  
    localStorage.setItem("mod","wg")
  }  
}

if(localStorage.getItem("mod")=="wg"){
    wg.style.display = 'block';  
    sites.style.display = 'none';  
} 
else if(localStorage.getItem("mod")=="sites"){
    sites.style.display = 'block';  
    wg.style.display = 'none';  
}
else{  
    wg.style.display = 'none';  
    sites.style.display = 'block';  
    localStorage.setItem("mod","sites")
} 