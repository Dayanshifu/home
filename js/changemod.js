var wg = document.getElementById('wg');  
var sites = document.getElementById('sites');  
var wordl = document.getElementById('word')
var clear = document.getElementById('timer')
var main = document.getElementById('main')

document.addEventListener("contextmenu", function(event){
  // 阻止浏览器默认的右键菜单行为
  event.preventDefault();
  changemod()
}) 

function changemod(){
  if (sites.style.display == 'none') {  
    sites.style.display = 'block';  
    wg.style.display = 'none';  
    localStorage.setItem("mod","sites")
  } 
  else {  
    sites.style.display = 'none';  
    wg.style.display = 'block';  
    localStorage.setItem("mod","wg")
  }  
} 
function changeshow(){
  if (main.style.display == 'none') {  
    main.style.display = 'block';  
    clear.style.paddingTop = '70px';  
    clear.style.paddingBottom = '30px';  
    localStorage.setItem("show",1)
  } 
  else {  
    main.style.display = 'none';  
    clear.style.paddingTop = '17%'; 
    clear.style.paddingBottom = '70px';  
    localStorage.setItem("show",0)
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
  wg.style.display = 'block';  
  sites.style.display = 'none';  
  localStorage.setItem("mod","wg")
} 

if(localStorage.getItem("show")==0){
  clear.style.paddingTop = '17%'; 
  clear.style.paddingBottom = '70px';  
  main.style.display = 'none';  
} 
else if(localStorage.getItem("show")==1){
  main.style.display = 'block';  
  clear.style.paddingTop = '70px';  
  clear.style.paddingBottom = '30px';  
}
else{  
  main.style.display = 'block';  
  clear.style.paddingTop = '70px';  
  clear.style.paddingBottom = '30px';   
  localStorage.setItem("show",1)
} 