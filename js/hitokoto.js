var p = document.getElementById("hitokoto");
var q = document.getElementById("fromwho");

// 发起请求
function getHitokoto(){
    fetch("https://v1.hitokoto.cn/?c=i")
    .then(function(response) {
        return response.json();
    }) 
    .then(function(data) {
        if((data.type=='c'&& (data.from=="原神" || data.from_who=="原神"))||data.type!='c'){
            // 将hitokoto内容替换到p标签中
            p.innerText = "「  "+ data.hitokoto+"」";
            if(data.from_who!=null){
                if(data.from_who=="原神"){
                    q.innerText = data.from_who/*+" "+data.from*/;
                }
                else if(data.from_who=="佚名"){
                    q.innerText=data.from
                }
                else{
                q.innerText = '——'+data.from_who/*+" "+data.from*/;
                }
            }
            else{
                q.innerText=data.from
            
            }
        }else{getHitokoto()}
    })}


getHitokoto()