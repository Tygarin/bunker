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
        .querySelector('.login-button')
        .addEventListener('click', async function () {
            const login = document.getElementById('login').value;
            const password = document.getElementById('password').value;
            console.log(await server.login({ login, password }));
            console.log(await server.logout());
        });


};

let startGame = document.getElementById('startGame');
startGame.addEventListener('click', function() {
    window.open('room.html', '_self');
});
