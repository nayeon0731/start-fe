console.log("03");
//타입변환
// var isMan = true;

// var foo = 42;
// var foo = "bar";
// var foo = true;

// if(isMan) {
//     console.log("true");
// }

//원시타입,참조타입
// var a = 1;
// var b = a;
// b = 2;
// console.log(a,b);

// var a = [1];
// var b = a;
// b[0] = [2];
// console.log(a,b);

// var a = {x: 1};
// var b = a;
// b.x = 2;
// console.log(a,b);


// //call by value
// function byValue(count) {
//     count = count + 2;
// }

// var count = 3;
// byValue(count);
// console.log(count);

// //call by reference
// function byReference(count) {
//     count.push('2');
// }

// var count = ['1'];
// byReference(count);
// console.log(count);

//if문
// var isMan = true;
// var gender = ''
// if (isMan) {
//     gender = '남자';
// } else {
//     gender = '여자';
// }

// function sum(x) {
//     var y = 1;
//     return x+y;
// }

// var sum = function() {
//     var y=1;
//     return x+y;
// }


//주요 전역함수
// alert('alert');

// var who = prompt('당신은 누구세요?');

// var isDelete = confirm('정말 삭제합니까?');
// if (isDelete) {

// }


// var enc = encodeURIComponent('카카오');
// decodeURIComponent(enc);

//setTimeout
// function test() {
//     console.log('test()');
// }

// var id = setTimeout(test,1000);
// var id = setInterval(test, 1000);

// function test() {
//     console.log('test()');
//     setTimeout(test, 1000);
// }

//scope
// var nick = 'nayeon';
// var age = 30;

// function test() {
//     console.log(nick, age);
// }

// test();
// console.log(age);

// var name = 'global';
// function test() {
//   console.log(name);
//   var name = 'local';
//   console.log(name);
// }


// test2();
// function test2() {
//   console.log('test');
// }


//익명 즉시실행함수
// var a = 2;

// (function() {
//     var a=1;
//     console.log(a);
// })();


// var text = 'abc def ghi jkl abc def';
// var testReg = /abc/;
// var result = testReg.test(text);

// console.log(result);

// var text = 'abc def ghi jkl abc def';
// var matchReg = /abc/;
// var result = text.match(matchReg);

// console.log(result);

var todos = ['운동','독서'];

function create() {
    var todo = '게임';
    todos.push(todo);
    console.log(todos);
}

function read() {
    todos.forEach(function(todo) {
        console.log(todo);
    });
}

function update() {
    var updateTodo = '게임';
    var updateIndex = todos.findIndex(function(todo) {
        return todo ===updateTodo;
    });
    todos[updateIndex] = '공부';
    console.log(todos);
}

function isDelete() {
    var deleteTodo = '공부';
    var deleteIndex = todos.findIndex(function(todo) {
        return todo === deleteTodo;
    });

    todos.splice(deleteIndex, 1);
    console.log(todos);
}