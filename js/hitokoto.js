var p = document.getElementById("hitokoto");
var q = document.getElementById("fromwho");
var a=1
// 发起请求
function getHitokoto(){
    fetch("https://v2.jinrishici.com/sentence")
    .then(function(response) {
        return response.json();
    }) 
    .then(function(data) {
        if(a==1){
            // 将hitokoto内容替换到p标签中
            let cnt=100
            a=0
            p.innerText = "「  "
            for (let c of data.content) {
                setTimeout(function() {
                    p.innerText = p.textContent + c;
                }, cnt)
                cnt += 100;
            }
            a=1
            setTimeout(function() {
                p.innerText = p.textContent + "」"
            }, cnt)
            q.innerText=data.origin.author
        }else{getHitokoto()}
    });
    
    }

getHitokoto();