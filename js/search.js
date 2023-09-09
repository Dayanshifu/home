var sc = document.getElementById('sc')
var sc_text = document.getElementById('sc-text')
var google = document.getElementById('google')
var bing = document.getElementById('bing')
var baidu = document.getElementById('baidu')
/*var fsou = document.getElementById('fsou')*/

function googleon() {
    localStorage.setItem("sc", "google")
    sc.setAttribute("action", "https://www.google.com/search")
    sc_text.setAttribute("placeholder", "Google")
    sc_text.setAttribute("name", "q")
    sc_text.focus()
    google.setAttribute("class", "active");
    bing.removeAttribute("class");
    baidu.removeAttribute("class");
    /*fsou.removeAttribute("class");*/
}

function bingon() {
    localStorage.setItem("sc", "bing")
    sc.setAttribute("action", "https://www.bing.com/search")
    sc_text.setAttribute("placeholder", "MIcrosoft Bing")
    sc_text.setAttribute("name", "q")
    sc_text.focus()
    bing.setAttribute("class", "active");
    google.removeAttribute("class");
    baidu.removeAttribute("class");
    /*fsou.removeAttribute("class");*/
}

function baiduon() {
    localStorage.setItem("sc", "baidu")
    sc.setAttribute("action", "https://www.baidu.com/s")
    sc_text.setAttribute("placeholder", "百度一下，你就知道")
    sc_text.setAttribute("name", "word")
    sc_text.focus()
    baidu.setAttribute("class", "active");
    bing.removeAttribute("class");
    google.removeAttribute("class");
    /*fsou.removeAttribute("class");*/
}
/*
function fsouon() {
    localStorage.setItem("sc", "fsou")
    sc.setAttribute("action", "https://fsofso.com/search")
    sc_text.setAttribute("placeholder", "F搜")
    sc_text.setAttribute("name", "q")
    sc_text.focus()
    fsou.setAttribute("class", "active");
    bing.removeAttribute("class");
    baidu.removeAttribute("class");
    google.removeAttribute("class");
}*/

if (localStorage.getItem("sc") == null) {
    localStorage.setItem("sc", "bing")
}
if (localStorage.getItem("sc") == 'bing') {
    bingon()
}
if (localStorage.getItem("sc") == 'google') {
    googleon()
}
if (localStorage.getItem("sc") == 'baidu') {
    baiduon()
}/*
if (localStorage.getItem("sc") == 'fsou') {
    fsouon()
}*/