
var a = "nayeon";
console.log(a);

var isMan = true;
console.log(isMan);

function log(str) {
    console.log(str);
}

//object
var img = {};
img.width = 100;
img.height = 200;
console.log(img);

// 배열
var arr = [1,2,3,4,5];
console.log(arr);

//연산자
console.log(1+1);
console.log(a + " hello");

var me = {
    age: 11,
    name: 'nayeon',
    isMan: false,
    sayHello: function() {
        console.log('hello');
    }
}

me.sayHello();


for(var i=0; i<arr.length; i++) {
    console.log(arr[i]);
}