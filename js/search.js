var  google = document.getElementById('google')
var  bing = document.getElementById('bing')
var  baidu = document.getElementById('baidu')
var  sogou = document.getElementById('sogou')
var  _360 = document.getElementById('360')
var  fsou = document.getElementById('fsou')
var  github = document.getElementById('github')
var  gtrans = document.getElementById('gtrans')
var  bilibili = document.getElementById('bilibili')
var  zhihu = document.getElementById('zhihu')
var  gscholar = document.getElementById('gscholar')
//搜索的div
var  googleb = document.getElementById('googleb')
var  bingb = document.getElementById('bingb')
var  baidub = document.getElementById('baidub')
var  sogoub = document.getElementById('sogoub')
var  _360b = document.getElementById('360b')
var  fsoub = document.getElementById('fsoub')
var  githubb = document.getElementById('githubb')
var  gtransb = document.getElementById('gtransb')
var  bilibilib = document.getElementById('bilibilib')
var  zhihub = document.getElementById('zhihub')
var  gscholarb = document.getElementById('gscholarb')
function googleon(){
    localStorage.setItem("sc", "google")
    google.style.display="block";
    bing.style.display="none";
    baidu.style.display="none";
    sogou.style.display="none";
    _360.style.display="none";
    fsou.style.display="none";
    github.style.display="none";
    gtrans.style.display="none";
    bilibili.style.display="none";
    zhihu.style.display="none";
    gscholar.style.display="none";
    googleb.setAttribute("class", "active"); 
    bingb.removeAttribute("class"); 
    baidub.removeAttribute("class"); 
    sogoub.removeAttribute("class"); 
    _360b.removeAttribute("class"); 
    fsoub.removeAttribute("class"); 
    githubb.removeAttribute("class"); 
    gtransb.removeAttribute("class"); 
    bilibilib.removeAttribute("class"); 
    zhihub.removeAttribute("class"); 
    gscholarb.removeAttribute("class"); 
}
function bingon(){
    localStorage.setItem("sc", "bing")
    bing.style.display="block";
    google.style.display="none";
    baidu.style.display="none";
    sogou.style.display="none";
    _360.style.display="none";
    fsou.style.display="none";
    github.style.display="none";
    gtrans.style.display="none";
    bilibili.style.display="none";
    zhihu.style.display="none";
    gscholar.style.display="none";
    bingb.setAttribute("class", "active"); 
    googleb.removeAttribute("class"); 
    baidub.removeAttribute("class"); 
    sogoub.removeAttribute("class"); 
    _360b.removeAttribute("class"); 
    fsoub.removeAttribute("class"); 
    githubb.removeAttribute("class"); 
    gtransb.removeAttribute("class"); 
    bilibilib.removeAttribute("class"); 
    zhihub.removeAttribute("class"); 
    gscholarb.removeAttribute("class"); 
}
function baiduon(){
    localStorage.setItem("sc", "baidu")
    baidu.style.display="block";
    bing.style.display="none";
    google.style.display="none";
    sogou.style.display="none";
    _360.style.display="none";
    fsou.style.display="none";
    github.style.display="none";
    gtrans.style.display="none";
    bilibili.style.display="none";
    zhihu.style.display="none";
    gscholar.style.display="none";
    baidub.setAttribute("class", "active"); 
    bingb.removeAttribute("class"); 
    googleb.removeAttribute("class"); 
    sogoub.removeAttribute("class"); 
    _360b.removeAttribute("class"); 
    fsoub.removeAttribute("class"); 
    githubb.removeAttribute("class"); 
    gtransb.removeAttribute("class"); 
    bilibilib.removeAttribute("class"); 
    zhihub.removeAttribute("class"); 
    gscholarb.removeAttribute("class"); 
}
function sogouon(){
    localStorage.setItem("sc", "sogou")
    sogou.style.display="block";
    bing.style.display="none";
    baidu.style.display="none";
    google.style.display="none";
    _360.style.display="none";
    fsou.style.display="none";
    github.style.display="none";
    gtrans.style.display="none";
    bilibili.style.display="none";
    zhihu.style.display="none";
    gscholar.style.display="none";
    sogoub.setAttribute("class", "active"); 
    bingb.removeAttribute("class"); 
    baidub.removeAttribute("class"); 
    googleb.removeAttribute("class"); 
    _360b.removeAttribute("class"); 
    fsoub.removeAttribute("class"); 
    githubb.removeAttribute("class"); 
    gtransb.removeAttribute("class"); 
    bilibilib.removeAttribute("class"); 
    zhihub.removeAttribute("class"); 
    gscholarb.removeAttribute("class"); 
}
function _360on(){
    localStorage.setItem("sc", "360")
    _360.style.display="block";
    bing.style.display="none";
    baidu.style.display="none";
    sogou.style.display="none";
    google.style.display="none";
    fsou.style.display="none";
    github.style.display="none";
    gtrans.style.display="none";
    bilibili.style.display="none";
    zhihu.style.display="none";
    gscholar.style.display="none";
    _360b.setAttribute("class", "active"); 
    bingb.removeAttribute("class"); 
    baidub.removeAttribute("class"); 
    sogoub.removeAttribute("class"); 
    googleb.removeAttribute("class"); 
    fsoub.removeAttribute("class"); 
    githubb.removeAttribute("class"); 
    gtransb.removeAttribute("class"); 
    bilibilib.removeAttribute("class"); 
    zhihub.removeAttribute("class"); 
    gscholarb.removeAttribute("class"); 
}
function fsouon(){
    localStorage.setItem("sc", "fsou")
    fsou.style.display="block";
    bing.style.display="none";
    baidu.style.display="none";
    sogou.style.display="none";
    _360.style.display="none";
    google.style.display="none";
    github.style.display="none";
    gtrans.style.display="none";
    bilibili.style.display="none";
    zhihu.style.display="none";
    gscholar.style.display="none";
    fsoub.setAttribute("class", "active"); 
    bingb.removeAttribute("class"); 
    baidub.removeAttribute("class"); 
    sogoub.removeAttribute("class"); 
    _360b.removeAttribute("class"); 
    googleb.removeAttribute("class"); 
    githubb.removeAttribute("class"); 
    gtransb.removeAttribute("class"); 
    bilibilib.removeAttribute("class"); 
    zhihub.removeAttribute("class"); 
    gscholarb.removeAttribute("class"); 
}
function githubon(){
    localStorage.setItem("sc", "github")
    github.style.display="block";
    bing.style.display="none";
    baidu.style.display="none";
    sogou.style.display="none";
    _360.style.display="none";
    fsou.style.display="none";
    google.style.display="none";
    gtrans.style.display="none";
    bilibili.style.display="none";
    zhihu.style.display="none";
    gscholar.style.display="none";
    githubb.setAttribute("class", "active"); 
    bingb.removeAttribute("class"); 
    baidub.removeAttribute("class"); 
    sogoub.removeAttribute("class"); 
    _360b.removeAttribute("class"); 
    fsoub.removeAttribute("class"); 
    googleb.removeAttribute("class"); 
    gtransb.removeAttribute("class"); 
    bilibilib.removeAttribute("class"); 
    zhihub.removeAttribute("class"); 
    gscholarb.removeAttribute("class"); 
}
function gtranson(){
    localStorage.setItem("sc", "gtrans")
    gtrans.style.display="block";
    bing.style.display="none";
    baidu.style.display="none";
    sogou.style.display="none";
    _360.style.display="none";
    fsou.style.display="none";
    github.style.display="none";
    google.style.display="none";
    bilibili.style.display="none";
    zhihu.style.display="none";
    gscholar.style.display="none";
    gtransb.setAttribute("class", "active"); 
    bingb.removeAttribute("class"); 
    baidub.removeAttribute("class"); 
    sogoub.removeAttribute("class"); 
    _360b.removeAttribute("class"); 
    fsoub.removeAttribute("class"); 
    githubb.removeAttribute("class"); 
    googleb.removeAttribute("class"); 
    bilibilib.removeAttribute("class"); 
    zhihub.removeAttribute("class"); 
    gscholarb.removeAttribute("class"); 
}
function bilibilion(){
    localStorage.setItem("sc", "bilibili")
    bilibili.style.display="block";
    bing.style.display="none";
    baidu.style.display="none";
    sogou.style.display="none";
    _360.style.display="none";
    fsou.style.display="none";
    github.style.display="none";
    gtrans.style.display="none";
    google.style.display="none";
    zhihu.style.display="none";
    gscholar.style.display="none";
    bilibilib.setAttribute("class", "active"); 
    bingb.removeAttribute("class"); 
    baidub.removeAttribute("class"); 
    sogoub.removeAttribute("class"); 
    _360b.removeAttribute("class"); 
    fsoub.removeAttribute("class"); 
    githubb.removeAttribute("class"); 
    gtransb.removeAttribute("class"); 
    googleb.removeAttribute("class"); 
    zhihub.removeAttribute("class"); 
    gscholarb.removeAttribute("class"); 
}
function zhihuon(){
    localStorage.setItem("sc", "zhihu")
    zhihu.style.display="block";
    bing.style.display="none";
    baidu.style.display="none";
    sogou.style.display="none";
    _360.style.display="none";
    fsou.style.display="none";
    github.style.display="none";
    gtrans.style.display="none";
    bilibili.style.display="none";
    google.style.display="none";
    gscholar.style.display="none";
    zhihub.setAttribute("class", "active"); 
    bingb.removeAttribute("class"); 
    baidub.removeAttribute("class"); 
    sogoub.removeAttribute("class"); 
    _360b.removeAttribute("class"); 
    fsoub.removeAttribute("class"); 
    githubb.removeAttribute("class"); 
    gtransb.removeAttribute("class"); 
    bilibilib.removeAttribute("class"); 
    googleb.removeAttribute("class"); 
    gscholarb.removeAttribute("class"); 
}
function gscholaron(){
    localStorage.setItem("sc", "gscholar")
    gscholar.style.display="block";
    bing.style.display="none";
    baidu.style.display="none";
    sogou.style.display="none";
    _360.style.display="none";
    fsou.style.display="none";
    github.style.display="none";
    gtrans.style.display="none";
    bilibili.style.display="none";
    zhihu.style.display="none";
    google.style.display="none";
    gscholarb.setAttribute("class", "active"); 
    bingb.removeAttribute("class"); 
    baidub.removeAttribute("class"); 
    sogoub.removeAttribute("class"); 
    _360b.removeAttribute("class"); 
    fsoub.removeAttribute("class"); 
    githubb.removeAttribute("class"); 
    gtransb.removeAttribute("class"); 
    bilibilib.removeAttribute("class"); 
    zhihub.removeAttribute("class"); 
    bgoogleb.removeAttribute("class"); 
}
if( localStorage.getItem("sc") == null ){
    localStorage.setItem("sc", "bing")
}
if(localStorage.getItem("sc") == 'bing'){
    bingon()
}
if(localStorage.getItem("sc") == 'google'){
    googleon()
}
if(localStorage.getItem("sc") == 'baidu'){
    baiduon()
}
if(localStorage.getItem("sc") == 'sogou'){
    sogouon()
}
if(localStorage.getItem("sc") == '360'){
    _360on()
}
if(localStorage.getItem("sc") == 'fsou'){
    fsouon()
}
if(localStorage.getItem("sc") == 'github'){
    githubon()
}
if(localStorage.getItem("sc") == 'gtrans'){
    gtranson()
}
if(localStorage.getItem("sc") == 'zhihu'){
    zhihuon()
}
if(localStorage.getItem("sc") == 'bilibili'){
    bilibilion()
}
if(localStorage.getItem("sc") == 'gscholar'){
    gscholaron()
}