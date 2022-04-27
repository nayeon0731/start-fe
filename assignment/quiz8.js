console.log('quiz 8');

const $box = document.querySelector('#box');
const $min = document.querySelector('#min');
const $max = document.querySelector('#max');
const $btn = document.querySelector('#btn');

let result = 0;
let startNum = 0;
let countAnimation = null;
let cntSpeed = 10;

function getRandomNum(min, max) {
    return Math.floor(Math.random()*(max-min))+min;
}

function animation() {
    $box.innerHTML = startNum;
    startNum++;
    $btn.disabled=true;
    if(startNum == result) {
        clearInterval(countAnimation);
        $box.innerHTML = result;
        console.log(result);
        $btn.disabled=false;
    }
}

function create() {
    var max = parseInt($max.value, 10);
    var min = parseInt($min.value, 10);

    result = getRandomNum(min, max);
    console.log(result);
    startNum = result-50;
    countAnimation = setInterval(animation, cntSpeed);
}


$btn.addEventListener('click', create);
