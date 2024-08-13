var examDate = new Date("2024-06-16T23:59:00");
      var examDate1 = new Date("2024-06-19T00:00:00");
          
// 更新倒计时函数
function updateCountdown() {
  // 获取当前时间
  var now = new Date();
  
  // 计算时间差，单位为毫秒

  // 如果时间差小于等于59,400,000，说明中考已经开始或结束
      
  if (diff <= -210600000 || true) {
      // 显示中考已经结束的信息
      var diff = examDate1 - now; 
      // 将时间差转换为天、小时、分钟和秒
      var days =    Math.abs(Math.floor(diff / (1000 * 60 * 60 * 24)));
      var hours =   Math.abs(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      var minutes = Math.abs(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
      var seconds = Math.abs(Math.floor((diff % (1000 * 60)) / 1000));
    
      // 显示倒计时信息
      document.getElementById("day").innerHTML = days;
      document.getElementById("hour").innerHTML = hours;
      document.getElementById("minute").innerHTML = minutes;
      document.getElementById("second").innerHTML = seconds;
      // 停止更新倒计时
      //clearInterval(interval);
      //return;
  }
  if (diff <= 0&&false) {
      // 显示中考已经开始的信息
      document.getElementById("started").innerHTML = "已截止";
      document.getElementById("countdown").style.display="none";
      // 停止更新倒计时
      //clearInterval(interval);
      //return;
  }
  if (diff >0&&false){
  // 将时间差转换为天、小时、分钟和秒
  var days =    Math.abs(Math.floor(diff / (1000 * 60 * 60 * 24)));
  var hours =   Math.abs(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  var minutes = Math.abs(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
  var seconds = Math.abs(Math.floor((diff % (1000 * 60)) / 1000));

  // 显示倒计时信息
  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;

  }

}

// 调用一次更新倒计时函数，显示初始倒计时信息
updateCountdown();

// 每隔一秒调用一次更新倒计时函数，实现动态更新效果
var interval = setInterval(updateCountdown, 1000);