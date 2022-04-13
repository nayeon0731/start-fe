console.log('06');
var myName = 'nu';

/*
[1,3,4].map(item => item*2);

var btn = document.querySelector('btn');

btn.addEventListener(event => {
    console.log('click');
});
*/

//전개구문
function sum(x,y,z) {
    return x+y+z;
}
const numbers = [1,2,3];
console.log(sum(...numbers));

const obj = {
    a: 1,
    b: 2,
    c: 4,
};
const newObj = {...obj};
console.log(newObj);

const student = {
    name: 'ny',
    number: 2019,
    age: 23,
};
const newStudent = {...student};
console.log(newStudent);