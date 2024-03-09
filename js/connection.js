const gpt = document.getElementById('gpt');
const input = document.getElementById('gptinput');
const connection = new WebSocket('wss://api.chatnio.net/chat');
var cost = 0.0
var costnow = 0.0
const sensitiveWords = ['安敬瑜','白邓玉','白馥嫚','蔡馨菲','曾宇宸','丁雅珊','宫森洋','龚嘉林','顾才桢','何姝慧','贾宗榆','李璐含'
,'刘栩如','刘奕含','罗启瑞','吕佳蔓','马浩东','马小焯','马雨琛','马艺轩','牟智娴','南军','钱嘉欣','全思潼'
,'任博尔','师浚哲','宋雨喆','孙致洋','王慧轩','王彦杰','王怡皓','王奕博','王振恺','王梓宇','王梓舟','吴奇恒'
,'吴奇泽','肖钧原','邢煜婕','徐想','颜学谦','杨晨语','杨可轩','药基文','袁璐伟','张家荣','张祺玥','张润林'
,'张雨轩','赵瀚文','赵姝翰','郑承文','周文凯','李富明','李春燕','任泓宇','岳建生','韦玉琴','柴泽春','鲁明辉','陈文军'];

// 检测文本中是否包含敏感词的函数
function checkForSensitiveWords(text) {
  for (let word of sensitiveWords) {
    const pattern = new RegExp(word, "i"); // 使用正则表达式进行匹配，"i" 表示不区分大小写
    if (pattern.test(text)) {
      return true; // 如果匹配到敏感词，返回 true
    }
  }
  return false; // 如果没有匹配到敏感词，返回 false
}



connection.onopen = () => {
    send({ token: 'sk-5b4d5cb480785d4ba30daafedfccc375be7549b3868d06db6087ba2a91c5698a', id: -1 });
}
let loading = false;   


connection.onmessage = function(event) {
    const { message, end, quota } = JSON.parse(event.data);
    costnow += quota
    gpt.value += message;
    gpt1.value += message;
    loading = !end
    gpt.scrollTop = gpt.scrollHeight;
    gpt1.scrollTop = gpt1.scrollHeight;
    
    if (loading) return;
    gpt.value += '\n   ['+(costnow-cost).toFixed(2)+']';
    gpt1.value += '\n   ['+(costnow-cost).toFixed(2)+']';
    loading = !end
    gpt.scrollTop = gpt.scrollHeight;
    gpt1.scrollTop = gpt1.scrollHeight;
    cost=costnow
};

function send(data) {
    connection.send(JSON.stringify(data));
}


function sendRequest() {
    const memory = gpt.value
    const question = input.value
    const message = input.value.trim();
    if (gpt.value.length==0){
        gpt.value = '['+question+']\n';}
    else{gpt.value += '\n\n   ['+question+']\n'}
    gpt.scrollTop = gpt.scrollHeight;
    if(checkForSensitiveWords(input.value)){
        gpt.value += '请不要拿同学或老师来开玩笑☺️';
        gpt.scrollTop = gpt.scrollHeight;
        input.value = ''
        return}
    send({ message, model: 'azure-gpt-3.5-turbo', web: false });
    input.value = ''
}
function sendRequest1() {
    const memory = gpt1.value
    const question = input1.value
    const message = input1.value.trim();
    if (gpt1.value.length==0){
        gpt1.value = '['+question+']\n';}
    else{gpt1.value += '\n\n   ['+question+']\n'}
    gpt1.scrollTop = gpt1.scrollHeight;
    if(checkForSensitiveWords(input1.value)){
        gpt1.value += '请不要拿同学或老师来开玩笑☺️';
        gpt1.scrollTop = gpt1.scrollHeight;
        input1.value = ''
        return}
    send({ message, model: 'azure-gpt-3.5-turbo', web: false });
    input1.value = ''
}

let timeout = null;
input.onchange = function () {
    if (loading) return;
    // function wrapper to prevent multiple calls
    clearTimeout(timeout);
    timeout = setTimeout(sendRequest, 0);
};

input1.onchange = function () {
    if (loading) return;
    // function wrapper to prevent multiple calls
    clearTimeout(timeout);
    timeout = setTimeout(sendRequest1, 0);
};


