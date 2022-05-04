var days=new  Array ("日", "一", "二", "三", "四", "五", "六");
function show() {
  var currentDT = new Date();
  var y,m,date,day,hs,ms,ss,theDateStr;
  y = currentDT.getFullYear(); //四位整数表示的年份
  m = currentDT.getMonth(); //月
  date = currentDT.getDate(); //日
  day = currentDT.getDay(); //星期
  hs = currentDT.getHours(); //时
  ms = currentDT.getMinutes(); //分
  ss = currentDT.getSeconds(); //秒
  theDateStr = y+"年"+  m +"月"+date+"日 星期"+days[day]+" "+hs+":"+ms+":"+ss;
  document.getElementById("nowDiv"). innerHTML =theDateStr;
  // setTimeout 在执行时,是在载入后延迟指定时间后,去执行一次表达式,仅执行一次
  window.setTimeout(show, 1000);
}
