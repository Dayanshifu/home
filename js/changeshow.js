let currentIndex = 0;  
const items = document.querySelectorAll('#imagebox .headimage');  
let rotationInterval;

function rotateItems(){
    items[currentIndex].style.display = 'none';  
    currentIndex = (currentIndex + 1) % items.length;  
    items[currentIndex].style.display = 'block';  
}

rotationInterval = setInterval(rotateItems, 3000); 

document.getElementById('weather').addEventListener('click', function(){
    clearInterval(rotationInterval);  
    rotateItems();
    rotationInterval = setInterval(rotateItems, 3000);
});
