import average from './average';
import random from './random';

console.log('avg(1,2,3,4) :>> ', average(1, 2, 3, 4));
console.log('avg(1,2) :>> ', average(1, 2));
console.log('avg(1,2,3,4,5,6) :>> ', average(1, 2, 3, 4, 5, 6));
console.log(`avg(1,'a',2) :>> `, average(1, 'a', 2));
console.log('avg([1,2,3]) :>> ', average([1, 2, 3]));
console.log(
  'avg([1,2,3],[1,2,3,[1,2,3]]) :>> ',
  average([1, 2, 3], [1, 2, 3, [1, 2, 3]]),
);

console.log('random(0, 100) :>> ', random(0, 100));
console.log('random(3) :>> ', random(3));
console.log('random(3) :>> ', random(3));
console.log('random(3) :>> ', random(3));
console.log(`random(0,'a') :>> `, random(0, 'a'));
console.log(`random('a') :>> `, random('a'));