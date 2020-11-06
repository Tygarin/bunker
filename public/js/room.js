let avatar = document.getElementById('avatar');
let menuButton = document.getElementById('menuButton');


menuButton.addEventListener('click', function() {
    window.open('index.html', '_self');
});

avatar.addEventListener('click', function() {
    window.open('profile.html', '_self');
});