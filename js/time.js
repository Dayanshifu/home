var days = new Array("日", "一", "二", "三", "四", "五", "六");

function show() {
    var currentDT = new Date();
    var y, m, date, day, hs, ms, ss, theDateStr;
    y = currentDT.getFullYear(); //四位整数表示的年份
    m = currentDT.getMonth() + 1; //月
    date = currentDT.getDate(); //日
    day = currentDT.getDay(); //星期
    hs = currentDT.getHours(); //时
    if (hs < 10){hs='0'+String(hs)}
    ms = currentDT.getMinutes(); //分
    if (ms < 10){ms='0'+String(ms)}
    ss = currentDT.getSeconds(); //秒
    if (ss < 10){ss='0'+String(ss)}
    theDateStr = y + "年" + m + "月" + date + "日 星期" + days[day] + " ";
    theTimeStr =hs + ":" + ms;
    document.getElementById("nowDiv").innerHTML = theDateStr;
    document.getElementById("nowTime").innerHTML = theTimeStr;
    // setTimeout 在执行时,是在载入后延迟指定时间后,去执行一次表达式,仅执行一次
    window.setTimeout(show, 1000);
}