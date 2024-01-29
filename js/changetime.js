
var nowSeconds=document.getElementById("nowSeconds")
var swit=document.getElementById("switch")
if(localStorage.getItem("time")==0){
    nowSeconds.style.display='inline'
    swit.checked=true
    localStorage.setItem("time",1)
} 
else if(localStorage.getItem("time")==1){
    nowSeconds.style.display='none'
    swit.checked=false
    localStorage.setItem("time",0)
}
else{
    nowSeconds.style.display='inline'
    swit.checked=true
    localStorage.setItem("time",1)   
} 
function changetime(){
    if(localStorage.getItem("time")==0){
        nowSeconds.style.display='inline'
        swit.checked=true
        localStorage.setItem("time",1)
    } 
    else if(localStorage.getItem("time")==1){
        nowSeconds.style.display='none'
        swit.checked=false
        localStorage.setItem("time",0)
    }
    else{
        nowSeconds.style.display='inline'
        swit.checked=true
        localStorage.setItem("time",1)   
    } 
}