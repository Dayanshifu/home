/*当点击调用此方法后,将悬浮窗口显示出来,背景变暗*/
function displayWindow() {
  /*悬浮窗口的显示,需要将display变成block*/
  document.getElementById("window").style.display = "block";
  /*将背景变暗*/
  document.getElementById("shadow").style.display = "block";
}
/*当点击调用此方法,将悬浮窗口和背景全部隐藏*/
function hideWindow() {
  document.getElementById("window").style.display = "none";
  document.getElementById("shadow").style.display = "none";
}
/*当点击调用此方法后,将悬浮窗口显示出来,背景变暗*/
function displayGPT() {
  /*悬浮窗口的显示,需要将display变成block*/
  document.getElementById("window1").style.display = "block";
  /*将背景变暗*/
  document.getElementById("shadow").style.display = "block";
  document.getElementById("gptinput1").style.display = "block";
}
/*当点击调用此方法,将悬浮窗口和背景全部隐藏*/
function hideGPT() {
  document.getElementById("window1").style.display = "none";
  document.getElementById("shadow").style.display = "none";
  document.getElementById("gptinput1").style.display = "none";
}