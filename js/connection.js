const gpt = document.getElementById('gpt');
const input = document.getElementById('input');
const connection = new WebSocket('wss://api.chatnio.net/chat');
connection.onopen = () => {
    send({ token: 'anonymous', id: -1 });
}
let loading = false;

connection.onmessage = function(event) {
    const { message, end } = JSON.parse(event.data);
    gpt.value += message;
    loading = !end
};

function send(data) {
    connection.send(JSON.stringify(data));
}

function sendRequest() {
    const message = input.value.trim();
    send({ message, model: 'gpt-3.5-turbo', web: true });
    gpt.value = '';
}

let timeout = null;
input.onchange = function () {
    if (loading) return;
    // function wrapper to prevent multiple calls
    clearTimeout(timeout);
    timeout = setTimeout(sendRequest, 500);
};
