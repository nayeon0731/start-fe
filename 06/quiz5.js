console.log('quiz6');

const boxes = document.querySelectorAll('.box');

var clickedBox;
var isDown=false;
var offset = {x:0, y:0};

boxes.forEach((box) => {
    box.addEventListener("mousedown", (e) => {
        isDown = true;
        clickedBox = e.target;

        offset.x = e.clientX - clickedBox.offsetLeft;
        offset.y = e.clientY - clickedBox.offsetTop;
    });

    box.addEventListener("mouseup", (e) => {
        isDown = false;
    });
})

document.body.addEventListener("mousemove", (e) => {
    if(!isDown) return;
    clickedBox.style.left = (e.clientX - offset.x)+'px';
    clickedBox.style.top = (e.clientY - offset.y)+'px';
})