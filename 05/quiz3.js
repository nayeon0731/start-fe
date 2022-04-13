console.log('quiz3');

var addRedBtn = document.querySelector('.add-red');
var addBtn = document.querySelector('.add-btn');
var delBtn = document.querySelector('.delete-btn');
var box = document.querySelector('.box');


addRedBtn.addEventListener('click', function () {
    box.style.backgroundColor = 'red';
});

addBtn.addEventListener('click', function() {
    const addBox = document.createElement('div');
    addBox.className = 'box';
    document.body.appendChild(addBox);
    console.log('div');
});

delBtn.addEventListener('click', function() {
    //삭제할 box들이 있을 때만 삭제되도록. 
    addBox.removeChild(addBox.children[0]);

});