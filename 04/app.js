console.log('04');

// const element = document.getElementById('wrap');
//const element1 = document.querySelector('#wrap');
//const elements = document.querySelectorAll('div');
// console.log(elements);

/*
const div = document.createElement('div');
div.style.border = '1px solid red';
div.innerHTML = 'hello!';

document.body.appendChild(div);
*/

// document.querySelector('#wrap').innerHTML = 111;

// const el = document.getElementById('wrap2');
// el.remove();

// window.onload = function() {
//     console.log('hello');
// }

/*
window.addEventListener('load', function() {
    console.log('load1');
})
window.addEventListener('load', function() {
    console.log('load2');
})
*/

/*
var clickCount = 0;
function popup(event){
    console.log(++clickCount);
    console.log(arguments, this ,event ,event.type,event.currentTarget);
}
document.body.addEventListener('click', popup);

document.body.addEventListener('click', function(){
    console.log("click");
});

var app = document.getElementById('list');
app.addEventListener("click", function(event) {
    if(event.target.nodeName == "LI") {

    }
});
*/

var link = document.querySelector('a');
link.addEventListener("click", function(event) {
    window.open('https://www.daum.net');
    event.preventDefault();
})