

const mainDiv = document.querySelector('.mainDiv');
const text = document.querySelector('.mainDiv___titleBox');
const titleBox = document.querySelector('.mainDiv___titleBox');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;

    mainDiv.style.top = scrolled + "vh";
    text.style.top = 20 + scrolled*2 + "vh";
    titleBox.style.opacity = 100 - scrolled*8 + "%";
}