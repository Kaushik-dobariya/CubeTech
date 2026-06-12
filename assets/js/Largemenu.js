const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

document.querySelectorAll('.has-mega > a').forEach(item => {
    item.addEventListener('click', function(e){

        if(window.innerWidth <= 768){
            e.preventDefault();
            this.parentElement.classList.toggle('active');
        }

    });
});

document.getElementById('menuToggle').addEventListener('click', function () {
    document.getElementById('mainMenu').classList.toggle('active');
});

document.querySelectorAll('.has-sub > a').forEach(item => {
    item.addEventListener('click', function(e){

        if(window.innerWidth <= 768){
            e.preventDefault();
            this.parentElement.classList.toggle('active');
        }

    });
});