var school =    new Date("2025-07-05T08:30:00");
                        //2025-11-30T09:00:00
// 更新倒计时函数
function updateCountdown() {
  // 获取当前时间
  var now = new Date();
  
  // 计算时间差，单位为毫秒
  var diff1 = school - now; 

  // 如果时间差小于等于59,400,000，说明中考已经开始或结束
              //113400000
  if (diff1 <= -32400000) {
      // 显示中考已经开结束的信息
      document.getElementById("started1").innerHTML = "学考已经结束";
      document.getElementById("countdown1").style.display="none";
      // 停止更新倒计时
      //clearInterval(interval);
      //return;
  }
  if (diff1 <= 0) {
      // 显示中考已经开始的信息
      document.getElementById("started1").innerHTML = "学考已经开始";
      document.getElementById("countdown1").style.display="none";
      // 停止更新倒计时
      //clearInterval(interval);
      //return;
  }

  // 将时间差转换为天、小时、分钟和秒
  var days1 = Math.floor(diff1 / (1000 * 60 * 60 * 24));
  var hours1 = Math.floor((diff1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes1 = Math.floor((diff1 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds1 = Math.floor((diff1 % (1000 * 60)) / 1000);

  // 显示倒计时信息
  document.getElementById("day1").innerHTML = days1;
  document.getElementById("hour1").innerHTML = hours1;
  document.getElementById("minute1").innerHTML = minutes1;
  document.getElementById("second1").innerHTML = seconds1;
}

// 调用一次更新倒计时函数，显示初始倒计时信息
updateCountdown();

// 每隔一秒调用一次更新倒计时函数，实现动态更新效果
var interval = setInterval(updateCountdown, 1000);