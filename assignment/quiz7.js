console.log('quiz 7');

const $box = document.querySelector('.box');
const $bug = document.querySelector('#bug');
const $point = document.querySelector('#point');
const $life = document.querySelector('#life');

//bug의 크기
const bugWidth = $bug.offsetWidth;
const bugHeight = $bug.offsetHeight;
//box의 크기
const boxWidth = $box.offsetWith-bugWidth;
const boxHeight = $box.offsetHeight-bugHeight;
const bugSpeed = 1000;

let intervalID = 0;
let point = 0;
let life = 10;

//bug가 box영역 안에서만 랜덤 출현
//1. 크기 최대값출력
function getRandomNum(max) {
    return Math.floor(Math.random()*max);
}

function moveBug() {
    $bug.style.display = 'block';
    const X = getRandomNum(boxWidth);
    const Y = getRandomNum(boxHeight);

    $bug.style.left = `${X}px`;
    $bug.style.top = `${Y}px`;
}

function printBug() {
    clearInterval(intervalID);
    intervalID = setInterval(moveBug, bugSpeed);
}

function getBug(e) {
    point++;
    $point.innerHTML = point;
    $bug.style.display = 'none';
    printBug();
    e.stopPropagation();
}

function missBug() {
    life--;
    $life.innerHTML = life;
    if(life===0) {
        alert("Game Over");
    }
}

function init() {
    $bug.addEventListener('click', getBug);
    $box.addEventListener('click', missBug);
    printBug();
}

init();