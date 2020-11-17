const avatar = document.getElementById('avatar');
const menuButton = document.getElementById('menuButton');
const chat = document.querySelector('.chat');
const chat_field = document.querySelector('.chat-field');
const chat_elements = document.querySelector('.chat-elements');
const chat_input = document.getElementById('chat-input');
const send_btn = document.getElementById('send-message');


function newMessage() {
    const message = document.createElement('div');
    if(chat_input.value.length) {
        message.classList.add('message');
        message.innerText = chat_input.value;
        chat_field.appendChild(message);
        chat_input.value = '';
    }
    
    if (chat_field.offsetHeight > chat.offsetHeight - chat_elements.offsetHeight - 50) {
        chat_field.firstChild.classList.remove("message");
        chat_field.firstChild.classList.add("slide_top");
        console.log(chat_field.firstChild);
        setTimeout(()=>{
            chat_field.firstChild.remove();
        },500)
        
    }
    
}

// отправка сообщения на клавишу enter
send_btn.addEventListener('click', newMessage);
chat_input.addEventListener('keydown', (event)=> {
    if(event.keyCode == '13') {
        newMessage();
    }
});

// анимация кнопки send-message
send_btn.addEventListener('mousedown', function(e) {
    if(chat_input.value.length > 0) {
        document.querySelector(".material-icons").classList.add("cate");
        setTimeout(() => {
            document.querySelector(".material-icons").classList.remove("cate");
        }, 500);
    } else {
        document.querySelector(".material-icons").classList.add("no-touch");
        setTimeout(() => {
            document.querySelector(".material-icons").classList.remove("no-touch");
        }, 500);
    }
});

menuButton.addEventListener('click', function() {
    window.open('index.html', '_self');
});

avatar.addEventListener('click', function() {
    window.open('profile.html', '_self');
});

