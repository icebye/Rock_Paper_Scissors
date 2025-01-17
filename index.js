

var image_bot = document.querySelectorAll('img')[1];

var myNum = 0;
var image_my = document.querySelectorAll('img')[0];

var round = 0;

function set_image(n) {
    var randomNum = Math.floor(Math.random() * 3) + 1;
    var path_file = `./image/pic${randomNum}.png`;
    if (n === 1) {
        image_my.setAttribute('src', "./image/pic0.png");

        image_my.setAttribute('src', "./image/pic1.png");
    }
    else if (n === 2) {
        image_my.setAttribute('src', "./image/pic0.png");

        image_my.setAttribute('src', "./image/pic2.png");
    }
    else if (n === 3) {
        image_my.setAttribute('src', "./image/pic0.png");
        image_my.setAttribute('src', "./image/pic3.png");
    }
    image_bot.setAttribute('src', "./image/pic0.png");
    image_bot.setAttribute('src', path_file);
    round +=1;
    document.querySelector('p').innerHTML = `round ${round}`;
}




document.querySelectorAll('button')[0].addEventListener('click', function () {
    set_image(1);
});
document.querySelectorAll('button')[1].addEventListener('click', function () {
    set_image(2);
});
document.querySelectorAll('button')[2].addEventListener('click', function () {
    set_image(3);
});



