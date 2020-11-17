window.onload = function () {
     // Get the modal
    let modal_reg = document.getElementById('modal-reg');
    let modal_auth = document.getElementById('modal-log');
    let reg_button = document.getElementById('reg-button');
    let log_button = document.getElementById('log-button');
    let reg_prompt = document.getElementById('reg-prompt');

    const server = new Server();
    /*
    const user = new User(server);
    const chat = new Chat(server);
    const game = new Game(server);
    */

    reg_button.addEventListener('click', function () {
        modal_reg.style.display = "block";
    });

    log_button.addEventListener('click', function () {
        modal_auth.style.display = "block";
    });

    reg_prompt.addEventListener('click', function () {
        modal_auth.style.display = 'none';
        modal_reg.style.display = 'block';
    });

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal_reg) {
            modal_reg.style.display = "none";
        }

        if (event.target == modal_auth) {
            modal_auth.style.display = "none";
        }
    }

    //reg_button.addEventListener('click', document.getElementById('modal-reg').style.display='block')       

    document
        .querySelector('.registration-button')
        .addEventListener('click', async function () {
            const name = document.getElementById('name').value;
            const login = document.getElementById('login').value;
            const password = document.getElementById('password').value;
            const result = await server.registration({ name, login, password });
            if (result) { // регистрация и логин успешные, выйти в игру
                //...
            } else { // показать сообщение об ошибке
                //...
            }
        });

    document.querySelector('#user-login-btn').addEventListener('click', async function() {
        const login = document.getElementById('login').value;
        const password = document.getElementById('password').value;
        const result = await server.login({login, password});
        if (result) {
            window.open('room.html', '_self');
        } else {
            console.log('sdfs');
        }
    })
};

let startGame = document.getElementById('startGame');
startGame.addEventListener('click', function() {
    window.open('room.html', '_self');
});
