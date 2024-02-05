const gpt = document.getElementById('gpt');
const input = document.getElementById('input');
const connection = new WebSocket('wss://api.chatnio.net/chat');
connection.onopen = () => {
    send({ token: 'sk-5b4d5cb480785d4ba30daafedfccc375be7549b3868d06db6087ba2a91c5698a', id: -1 });
}
let loading = false;

connection.onmessage = function(event) {
    const { message, end } = JSON.parse(event.data);
    gpt.value += message;
    loading = !end
    gpt.scrollTop = gpt.scrollHeight;
};

function send(data) {
    connection.send(JSON.stringify(data));
}

function sendRequest() {
    const memory = gpt.value
    const question = input.value
    const message = input.value.trim();
    if (gpt.value.length==0){
        gpt.value = '['+question+']\n\n';}
    else{gpt.value += '\n\n  ['+question+']\n\n'}
    gpt.scrollTop = gpt.scrollHeight;
    send({ message, model: 'azure-gpt-3.5-turbo', web: true });
    input.value = ''


}

let timeout = null;
input.onchange = function () {
    if (loading) return;
    // function wrapper to prevent multiple calls
    clearTimeout(timeout);
    timeout = setTimeout(sendRequest, 500);
};
